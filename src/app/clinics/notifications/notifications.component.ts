import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { NEVER, Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddContactDialogComponent } from '../add-contact-dialog/add-contact-dialog.component';
import { ContractService } from '../services/contract.service';
import { ClinicService } from 'src/app/shared/services/clinic.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
  contacts$!: Observable<Contact[]>;
  hopitalId!: string;
  constructor(private contractService: ContractService, private clinicService: ClinicService, private dialog: MatDialog) {
    this.contacts$ = this.clinicService.activeClinics$.pipe(
      switchMap((clinicId: number | null) => {
        if (!clinicId) {
          return NEVER;
        }
        this.hopitalId = clinicId.toString();
        return this.contractService.getContacts(this.hopitalId);
      })
    );
  }

  add() {
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px' // Set maximum width
    };
    this.dialog.open(AddContactDialogComponent, dialogConfig).afterClosed().subscribe((contract: Contact)=>{
      if(contract){
        this.contractService.addContact(this.hopitalId,contract).subscribe(()=>{
          this.contacts$ = this.contractService.getContacts(this.hopitalId);
        });
      }
    });
  }

  edit(contact: Contact){
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px', // Set maximum width
      data: contact
    };
    this.dialog.open(AddContactDialogComponent, dialogConfig).afterClosed().subscribe((updatedContract: Contact)=>{
      if(updatedContract){
        this.contractService.updateContact(updatedContract.id,updatedContract).subscribe(()=>{
          this.contacts$ = this.contractService.getContacts(this.hopitalId);
        });
      }
    });
  }

  remove(contact: Contact){
    this.contractService.deleteContact(contact.id).subscribe(() =>{
      this.contacts$ = this.contractService.getContacts(this.hopitalId);
    });
  }
}
