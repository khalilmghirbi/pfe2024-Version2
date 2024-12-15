import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClinicService } from '../../shared/services/clinic.service';
import { Hotel } from '../models/hotel';
import { HotelService } from '../services/hotel.service';

@Component({
  selector: 'app-add-hotel-dialog',
  templateUrl: './add-hotel-dialog.component.html',
  styleUrls: ['./add-hotel-dialog.component.scss']
})
export class AddHotelDialogComponent {
  formGroup!: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddHotelDialogComponent>,
    public formbuilder: FormBuilder,
    public hotelService: HotelService,
    @Inject(MAT_DIALOG_DATA) public data: Hotel
  ) {
    this.formGroup = formbuilder.group({
      name: [data?.name ?? ''],
      rating: [data?.rating ?? 0],
      simpleRoom: [data?.simpleRoom ?? 0],
      doubleRoom: [data?.doubleRoom ?? 0],
      url: [data?.url ?? ''],
      location: [data?.location ?? '']
    });
  }

  get nameControl() {
    return this.formGroup.get('name') as FormControl;
  }

  get ratingControl() {
    return this.formGroup.get('rating') as FormControl;
  }

  get simpleRoomControl() {
    return this.formGroup.get('simpleRoom') as FormControl;
  }

  get doubleRoomControl() {
    return this.formGroup.get('doubleRoom') as FormControl;
  }

  get urlControl() {
    return this.formGroup.get('url') as FormControl;
  }

  get locationControl() {
    return this.formGroup.get('location') as FormControl;
  }

  onSubmit() {
    const hotel: Hotel = {
      ...this.formGroup.value
    };
    this.dialogRef.close({...this.data,...hotel});
  }
}
