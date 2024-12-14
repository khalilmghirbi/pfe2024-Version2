import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../../shared/services/clinic.service';
import { filter, map, NEVER, Observable, pipe, switchMap, tap } from 'rxjs';
import { Profile } from '../models/profile';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile$!: Observable<Profile>;
  formGroup!: FormGroup;
  services: string[] = [];
  hopitalId!: string;
  constructor(
    private profileService: ProfileService,
    private clinicService: ClinicService,
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
    this.profile$ = this.clinicService.activeClinics$.pipe(
      switchMap((clinicId: number | null) => {
        if (!clinicId) {
          return NEVER;
        }
        this.hopitalId = clinicId.toString();
        return this.profileService.getProfile(this.hopitalId);
      }),
      tap((profile: Profile) => {
        this.formGroup.patchValue(profile);
        this.services = profile.services;
      })
    );
  }

  onSubmit() {
    this.profileService.updateProfile(this.formGroup.value)
    .subscribe(() => {
      this.formGroup.patchValue(this.formGroup.value);
    });
  }
}
