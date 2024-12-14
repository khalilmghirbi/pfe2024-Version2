import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Treatment } from '../models/treatment';
import { TreatmentService } from '../services/treatment.service';

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
    public treatmentService: TreatmentService
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
    this.dialogRef.close(treatment);
  }
}
