import { Component } from '@angular/core';
import { Hotel } from '../models/hotel';
import { Observable, switchMap } from 'rxjs';
import { ClinicService } from '../services/clinic.service';
import { ActivatedRoute, Params } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddHotelDialogComponent } from '../add-hotel-dialog/add-hotel-dialog.component';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent {
  hotels$!: Observable<Hotel[]>;
  constructor(
    private clinicService: ClinicService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {
    this.hotels$ = this.activatedRoute.params.pipe(
      switchMap((params: Params) => {
        const id = params['id'];
        return this.clinicService.getHotels(id);
      })
    );
  }

  add() {
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px', // Set maximum width
    };
    this.dialog.open(AddHotelDialogComponent, dialogConfig);
  }

  edit(contact: Hotel) {
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px', // Set maximum width
      data: contact,
    };
    this.dialog.open(AddHotelDialogComponent, dialogConfig);
  }

  remove(contact: Hotel) {
    this.clinicService.removeDoctor(contact.id);
  }
}
