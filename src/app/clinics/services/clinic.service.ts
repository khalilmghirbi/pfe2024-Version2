import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ClinicService {
  clinics: string[] = [
    'City Health Clinic',
    'Sunrise Health Clinic',
    'Lakeside Family Clinic',
    'Mountain View Clinic',
  ];

  profile: Profile = {
    name: 'City Health Clinic',
    image: 'https://marketplace.canva.com/EAEyadYkO0s/1/0/1600w/canva-health-care-logo-fSbVHMz-u48.jpg',
    address: '123 Main St',
    city: 'Anytown',
    openingYear: 2000,
    capacity: 100,
    priceWarrantyCertificate: 1000,
    phone: '123-456-7890',
    services: ['General Medicine', 'Pediatrics', 'Dermatology']
  };

  constructor() {}

  getClinics(): Observable<{ id: string; name: string }[]> {
    return of(this.clinics).pipe(
      map((clinics) =>
        clinics.map((clinic, index) => ({ id: index.toString(), name: clinic }))
      ),
      delay(1000)
    );
  }

  getProfile(id: string): Observable<Profile> {
    return of(this.profile).pipe(delay(1000));
  }

  updateProfile(profile: Profile): Observable<Profile> {
    this.profile = profile;
    return of(profile).pipe(delay(1000));
  }
}
