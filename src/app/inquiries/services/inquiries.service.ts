import { Injectable } from '@angular/core';
import { delay, interval, map, Observable, of } from 'rxjs';
import { Inquiry } from '../models/inquiry';
import { InqueryStatus } from '../enums/inquery-status';
import { Kpi } from '../models/kpi';

@Injectable({
  providedIn: 'root',
})
export class InquiriesService {
  constructor() {}
  patientNames = [
    'Amine Mghirbi',
    'Khalil Mghirbi',
    'Alice Smith',
    'Bob Johnson',
    'Charlie Brown',
    'David Wilson',
    'Eve Davis',
    'Faythe Miller',
    'Grace Lee',
    'Heidi Thompson',
  ];
  medicalProcedures = [
    'Brain Surgery',
    'Knee Replacement',
    'Heart Bypass',
    'Cataract Surgery',
    'Gallbladder Removal',
    'Hip Replacement',
    'Spinal Fusion',
    'Liver Biopsy',
    'Appendectomy',
    'Hernia Repair',
  ];
  coordinators = [
    'Jane Doe',
    'John Doe',
    'Sara Connor',
    'Peter Parker',
    'Clark Kent',
  ];
  caseManagers = [
    'Tony Stark',
    'Bruce Wayne',
    'Diana Prince',
    'Natasha Romanoff',
    'Wade Wilson',
  ];

  statuses = [
    InqueryStatus.Pending,
    InqueryStatus.Rejected,
    InqueryStatus.InProgress,
    InqueryStatus.Closed,
    InqueryStatus.New,
  ];

  clinics: string[] = [
    'City Health Clinic',
    'Green Valley Medical Center',
    'Sunrise Health Clinic',
    'Lakeside Family Clinic',
    'Mountain View Clinic',
  ];

  countries: string[] = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
  ];

  getInquiries(): Observable<Inquiry[]> {
    // this.httpClint.get('http://localhost:3000/inquiries');

    const inquiries: Inquiry[] = Array.from({ length: 7 }, () => ({
      PatientName: this.getRandomItem(this.patientNames),
      MedicalProcedure: this.getRandomItem(this.medicalProcedures),
      ReceptionDate: new Date(),
      AnswerDate: new Date(),
      CoordinatorName: this.getRandomItem(this.coordinators),
      CaseManagerName: this.getRandomItem(this.caseManagers),
      Status: this.getRandomItem(this.statuses),
      Country: this.getRandomItem(this.countries),
      Clinic: this.getRandomItem(this.clinics),
    }));

    return of(inquiries).pipe(delay(1000));
  }

  getKpis(): Observable<Kpi> {
    return interval(5000).pipe(
      // Emit a value every 5 seconds
      map(() => {
        const kpi: Kpi = {
          QuatedRate: Math.floor(Math.random() * 101), // Random number between 0 and 100
          ResponseTime: Math.floor(Math.random() * 101), // Random number between 0 and 100
          WaitingConfirmation: Math.floor(Math.random() * 101), // Random number between 0 and 100
        };
        return kpi;
      })
    );
  }

  getPatientNames(): Observable<string[]> {
    return of(this.patientNames);
  }

  getProcedures(): Observable<string[]> {
    return of(this.medicalProcedures);
  }

  getCoordinators(): Observable<string[]> {
    return of(this.coordinators);
  }

  getCaseManagers(): Observable<string[]> {
    return of(this.caseManagers);
  }

  getStatuses(): Observable<string[]> {
    return of(this.statuses);
  }

  getClinics(): Observable<string[]> {
    return of(this.clinics);
  }

  getCountries(): Observable<string[]> {
    return of(this.countries);
  }

  private getRandomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }
}
