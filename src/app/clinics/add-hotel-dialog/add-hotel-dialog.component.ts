import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClinicService } from '../services/clinic.service';
import { Hotel } from '../models/hotel';

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
    public clinicService: ClinicService,
    @Inject(MAT_DIALOG_DATA) public data: Hotel
  ) {
    this.formGroup = formbuilder.group({
      name: [data?.name ?? ''],
      email: [data?.rating ?? ''],
      simpleRoom: [data?.simpleRoom ?? ''],
      doubleRoom: [data?.doubleRoom ?? ''],
      url: [data?.url ?? ''],
      location: [data?.location ?? '']
    });
  }

  get nameControl() {
    return this.formGroup.get('name') as FormControl;
  }

  get emailControl() {
    return this.formGroup.get('email') as FormControl;
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
    this.clinicService.addHotel('0', hotel).subscribe();
    this.dialogRef.close();
  }
}
