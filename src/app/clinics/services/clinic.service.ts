import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { Profile } from '../models/profile';
import { Media } from '../models/media';
import { Treatment } from '../models/treatment';

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
    image:
      'https://marketplace.canva.com/EAEyadYkO0s/1/0/1600w/canva-health-care-logo-fSbVHMz-u48.jpg',
    address: '123 Main St',
    city: 'Anytown',
    openingYear: 2000,
    capacity: 100,
    priceWarrantyCertificate: 1000,
    phone: '123-456-7890',
    services: ['General Medicine', 'Pediatrics', 'Dermatology'],
  };

  medias: Media[] = [
    {
      name: 'City Health Clinic',
      image:
        'https://marketplace.canva.com/EAEyadYkO0s/1/0/1600w/canva-health-care-logo-fSbVHMz-u48.jpg',
      language: ['All'],
    },
    {
      name: 'City Health Clinic',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/f/f6/H%C3%B4ptal_am%C3%A9ricain_de_Neuilly_2011.jpg',
      language: ['English'],
    },
    {
      name: 'City Health Clinic',
      image:
        'https://media.gettyimages.com/id/1312706413/fr/photo/b%C3%A2timent-moderne-dh%C3%B4pital.jpg?s=612x612&w=gi&k=20&c=uDT_aoo1Tdi_HdKddXUaaB19YVDgwsjP4upK99Vj0gc=',
      language: ['English', 'Spanish'],
    }
  ];

  treatments: Treatment[] = [
    {
      name: 'General Medicine',
      capacity: 100,
    },
    {
      name: 'Pediatrics',
      capacity: 150,
    },
    {
      name: 'Dermatology',
      capacity: 200,
    }
  ];

  constructor() {}

  getClinics(): Observable<{ id: string; name: string }[]> {
    return of(this.clinics).pipe(
      map((clinics) =>
        clinics.map((clinic, index) => ({ id: index.toString(), name: clinic }))
      ),
      delay(100)
    );
  }

  getTreatments(): Observable<Treatment[]> {
    return of(this.treatments).pipe(
      delay(100)
    );
  }

  getProfile(id: string): Observable<Profile> {
    return of(this.profile).pipe(delay(100));
  }

  updateProfile(profile: Profile): Observable<Profile> {
    this.profile = profile;
    return of(profile).pipe(delay(100));
  }

  addProcedure(procedure: Treatment): Observable<Treatment[]> {
    this.treatments.push(procedure);
    return this.getTreatments();
  }

  getMedias(id: string): Observable<Media[]> {
    return of(this.medias).pipe(delay(100));
  }
}
