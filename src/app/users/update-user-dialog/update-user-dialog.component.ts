import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../models/user';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ManagerService } from '../services/manager.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { filter, map, Observable, switchMap } from 'rxjs';
import { ClinicService } from 'src/app/shared/services/clinic.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-update-user-dialog',
  templateUrl: './update-user-dialog.component.html',
  styleUrls: ['./update-user-dialog.component.scss'],
})
export class UpdateUserDialogComponent {
  formGroup!: FormGroup;
  matcher!: CustomErrorStateMatcher;
  clinics: string[] = [];
  constructor(
    public dialogRef: MatDialogRef<UpdateUserDialogComponent>,
    public managerService: ManagerService,
    public clinicService: ClinicService,
    public authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: User,
    formBuilder: FormBuilder
  ) {
    this.ClinicNames().subscribe(
      value => {
        this.clinics = value
      }
    )
    this.formGroup = formBuilder.group({
      name: [data.name, Validators.required],
      email: [data.email, [Validators.email, Validators.required]],
      phone: [data.phone, Validators.required],
      hospital: [data.hopital, Validators.required],
      country: [data.country, Validators.required],
    });
    this.matcher = new CustomErrorStateMatcher();
  }

  ClinicNames() : Observable<string[]>{
    return this.authService.userDetail$.pipe(
      filter((userDetail) => !!userDetail),
      switchMap((userDetail) => {
        return this.clinicService.getClinics(userDetail?.id_user || 0);
      }
      ),
      map(item => item.map(v => v.name)));
  }

  public get nameControl(): FormControl<string> {
    return this.formGroup.get('name') as FormControl<string>;
  }

  public get emailControl(): FormControl<string> {
    return this.formGroup.get('email') as FormControl<string>;
  }

  public get phoneControl(): FormControl<string> {
    return this.formGroup.get('phone') as FormControl<string>;
  }

  public get hospitalControl(): FormControl<string> {
    return this.formGroup.get('hospital') as FormControl<string>;
  }

  public get countryControl(): FormControl<string> {
    return this.formGroup.get('country') as FormControl<string>;
  }

  onSubmit() {
    this.managerService.updateManager(this.data.id, {... this.formGroup.value}).subscribe();
  }
}
