import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  clinics: string[] = [
    'City Health Clinic',
    'Sunrise Health Clinic',
    'Lakeside Family Clinic',
    'Mountain View Clinic',
  ];

  constructor() { }

  getClinics(): Observable<{id: string, name:string}[]> {
    return of(this.clinics).pipe(
      map((clinics) => clinics.map((clinic, index) => ({id: index.toString(), name: clinic}))),
      delay(1000)
    );
  }
}
