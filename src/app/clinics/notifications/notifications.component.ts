import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable, switchMap } from 'rxjs';
import { ClinicService } from '../services/clinic.service';
import { ActivatedRoute, Params } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddContactDialogComponent } from '../add-contact-dialog/add-contact-dialog.component';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  contacts$!: Observable<Contact[]>;
  constructor(private clinicService: ClinicService, private activatedRoute: ActivatedRoute, private dialog: MatDialog) {
    this.contacts$ = this.activatedRoute.params.pipe(
      switchMap((params: Params) => {
        const id = params['id'];
        return this.clinicService.getContracts(id);
      })
    );
  }

  add() {
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px' // Set maximum width
    };
    this.dialog.open(AddContactDialogComponent, dialogConfig);
  }

  edit(contact: Contact){
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px', // Set maximum width
      data: contact
    };
    this.dialog.open(AddContactDialogComponent, dialogConfig);
  }

  remove(contact: Contact){
    this.clinicService.removeDoctor(contact.id);
  }
}
