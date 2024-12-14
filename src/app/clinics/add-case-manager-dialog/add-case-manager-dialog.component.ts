import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CaseManager } from '../models/case-manager';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClinicService } from '../../shared/services/clinic.service';

@Component({
  selector: 'app-add-case-manager-dialog',
  templateUrl: './add-case-manager-dialog.component.html',
  styleUrls: ['./add-case-manager-dialog.component.scss']
})
export class AddCaseManagerDialogComponent {
  formGroup!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddCaseManagerDialogComponent>,
    public formbuilder: FormBuilder,
    public clinicService: ClinicService,
    @Inject(MAT_DIALOG_DATA) public data: CaseManager
  ) {
    this.formGroup = formbuilder.group({
      name: [data?.name ?? ''],
      email: [data?.email ?? ''],
      country: [data?.country ?? '']
    });
  }

  get nameControl() {
    return this.formGroup.get('name') as FormControl;
  }

  get emailControl() {
    return this.formGroup.get('email') as FormControl;
  }

  get countryControl() {
    return this.formGroup.get('country') as FormControl;
  }


  onSubmit() {
    const caseManger: CaseManager = {
      ...this.formGroup.value
    };
    this.dialogRef.close(caseManger);
  }
}
