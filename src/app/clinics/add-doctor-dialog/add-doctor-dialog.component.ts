import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClinicService } from '../../shared/services/clinic.service';
import { Doctor } from '../models/doctor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-doctor-dialog',
  templateUrl: './add-doctor-dialog.component.html',
  styleUrls: ['./add-doctor-dialog.component.scss']
})
export class AddDoctorDialogComponent {
  formGroup!: FormGroup;
  photoFile!: File;
  cvFile!: File;
  langOptions$!: Observable<string[]>
  specOptions$!: Observable<string[]>

  constructor(
    public dialogRef: MatDialogRef<AddDoctorDialogComponent>,
    public formbuilder: FormBuilder,
    public clinicService: ClinicService,
    @Inject(MAT_DIALOG_DATA) public data: Doctor
  ) {
    this.formGroup = formbuilder.group({
      name: [data?.name ?? ''],
      photo: [data?.photo ?? ''],
      cv: [data?.cv ?? ''],
      specialities: [data?.specialities ?? []],
      languages:[data?.languages ?? []]
    });
    this.langOptions$ = this.clinicService.getLangs()
    this.specOptions$ = this.clinicService.getSpecialitites()
  }

  get nameControl() {
    return this.formGroup.get('name') as FormControl;
  }

  get photoControl() {
    return this.formGroup.get('photot') as FormControl;
  }

  get cvControl() {
    return this.formGroup.get('cv') as FormControl;
  }

  get specialityControl() {
    return this.formGroup.get('specialities') as FormControl;
  }

  
  get languagesControl() {
    return this.formGroup.get('languages') as FormControl;
  }

  setPhotoData(event: Event): void {
    const eventTarget: HTMLInputElement | null =
      event.target as HTMLInputElement | null;
    if (eventTarget?.files?.[0]) {
      this.photoFile = eventTarget.files[0];
      this.photoControl.setValue(this.photoFile.name);
    }
  }

  setCvData(event: Event): void {
    const eventTarget: HTMLInputElement | null =
      event.target as HTMLInputElement | null;
    if (eventTarget?.files?.[0]) {
      this.cvFile = eventTarget.files[0];
      this.cvControl.setValue(this.cvFile.name);
    }
  }

  onSubmit() {
    const doctor: Doctor = {
      ...this.formGroup.value
    };
    this.dialogRef.close(doctor);
  }
  
}
