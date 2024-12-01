import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../services/clinic.service';
import { Observable, pipe, switchMap, tap } from 'rxjs';
import { Profile } from '../models/profile';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile$!: Observable<Profile>;
  formGroup!: FormGroup;
  services: string[] = [];
  constructor(
    private clinicService: ClinicService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      address: [''],
      city: [''],
      openingYear: [''],
      capacity: [''],
      priceWarrantyCertificate: [''],
      phone: [''],
    });
  }

  get addressControl(): FormControl {
    return this.formGroup.get('address') as FormControl;
  }
  get cityControl(): FormControl {
    return this.formGroup.get('city') as FormControl;
  }
  get openingYearControl(): FormControl {
    return this.formGroup.get('openingYear') as FormControl;
  }
  get capacityControl(): FormControl {
    return this.formGroup.get('capacity') as FormControl;
  }
  get priceWarrantyCertificateControl(): FormControl {
    return this.formGroup.get('priceWarrantyCertificate') as FormControl;
  }
  get phoneControl(): FormControl {
    return this.formGroup.get('phone') as FormControl;
  }

  ngOnInit(): void {
    this.profile$ = this.activatedRoute.params.pipe(
      switchMap((params: Params) => {
        //todo this is not working check why
        const id = params['id'];
        return this.clinicService.getProfile("1");
      }),
      tap((profile: Profile) => {
        this.formGroup.patchValue(profile);
        this.services = profile.services;
      })
    );
  }

  onSubmit() {
    this.clinicService.updateProfile(this.formGroup.value)
    .subscribe();
  }
}
