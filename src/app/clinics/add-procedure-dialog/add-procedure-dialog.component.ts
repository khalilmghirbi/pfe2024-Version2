import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ClinicService } from '../services/clinic.service';
import { Treatment } from '../models/treatment';

@Component({
  selector: 'app-add-procedure-dialog',
  templateUrl: './add-procedure-dialog.component.html',
  styleUrls: ['./add-procedure-dialog.component.scss'],
})
export class AddProcedureDialogComponent {
  formGroup!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddProcedureDialogComponent>,
    public formbuilder: FormBuilder,
    public clinicService: ClinicService
  ) {
    this.formGroup = formbuilder.group({
      procedure: [''],
    });
  }

  get procedureControl() {
    return this.formGroup.get('procedure') as FormControl;
  }

  onSubmit() {
    const treatment: Treatment = {
      name: this.procedureControl.value,
      capacity: 0,
    };
    this.clinicService.addProcedure(treatment).subscribe();
    this.dialogRef.close();
  }
}
