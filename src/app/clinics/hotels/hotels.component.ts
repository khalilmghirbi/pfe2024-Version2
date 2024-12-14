import { Component } from '@angular/core';
import { Hotel } from '../models/hotel';
import { NEVER, Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddHotelDialogComponent } from '../add-hotel-dialog/add-hotel-dialog.component';
import { HotelService } from '../services/hotel.service';
import { ClinicService } from 'src/app/shared/services/clinic.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent {
  hotels$!: Observable<Hotel[]>;
  hopitalId!: string;
  constructor(
    private hotelService: HotelService,
    private clinicService: ClinicService,
    private dialog: MatDialog
  ) {
    this.hotels$ = this.clinicService.activeClinics$.pipe(
      switchMap((clinicId: number | null) => {
        if (!clinicId) {
          return NEVER;
        }
        this.hopitalId = clinicId.toString();
        return this.hotelService.getHotels(this.hopitalId);
      })
    );
  }

  add() {
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px', // Set maximum width
    };
    this.dialog.open(AddHotelDialogComponent, dialogConfig).afterClosed().subscribe((hotel: Hotel)=>{
      if(hotel){
        this.hotelService.addHotel(this.hopitalId,hotel).subscribe(()=>{
          this.hotels$ = this.hotelService.getHotels(this.hopitalId);
        });
      }
    });
  }

  edit(contact: Hotel) {
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px', // Set maximum width
      data: contact,
    };
    this.dialog.open(AddHotelDialogComponent, dialogConfig).afterClosed().subscribe((hotel: Hotel)=>{
      if(hotel){
        this.hotelService.updateHotel(hotel.id,hotel).subscribe(()=>{
          this.hotels$ = this.hotelService.getHotels(this.hopitalId);
        });
      }
    });
  }

  remove(hotel: Hotel) {
    this.hotelService.deleteHotel(hotel.id);
  }
}
