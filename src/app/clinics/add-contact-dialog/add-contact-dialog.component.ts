import { Component, Inject } from '@angular/core';
import { Contact } from '../models/contact';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ClinicService } from '../../shared/services/clinic.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-contact-dialog',
  templateUrl: './add-contact-dialog.component.html',
  styleUrls: ['./add-contact-dialog.component.scss']
})
export class AddContactDialogComponent {
  formGroup!: FormGroup;
  photoFile!: File;
  cvFile!: File;
  langOptions$!: Observable<string[]>
  specOptions$!: Observable<string[]>

  constructor(
    public dialogRef: MatDialogRef<AddContactDialogComponent>,
    public formbuilder: FormBuilder,
    public clinicService: ClinicService,
    @Inject(MAT_DIALOG_DATA) public data: Contact
  ) {
    this.formGroup = formbuilder.group({
      name: [data?.name ?? ''],
      email: [data?.email ?? '']
    });
    this.langOptions$ = this.clinicService.getLangs()
    this.specOptions$ = this.clinicService.getSpecialitites()
  }

  get nameControl() {
    return this.formGroup.get('name') as FormControl;
  }

  get emailControl() {
    return this.formGroup.get('email') as FormControl;
  }


  onSubmit() {
    const contact: Contact = {
      ...this.formGroup.value
    };
    this.dialogRef.close(contact);
  }
}
