import { Injectable } from '@angular/core';
import { delay, interval, map, Observable, of } from 'rxjs';
import { Inquiry } from '../models/inquiry';
import { InqueryStatus } from '../enums/inquery-status';
import { Kpi } from '../models/kpi';
import { Appointment } from '../models/appointment';
import { HttpclientService } from 'src/app/shared/services/httpclient.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class InquiriesService {
  baseUrl: string = environment.apiUrl;
  constructor(private httpClientService:HttpclientService) {}
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
    InqueryStatus.Awaiting,
    InqueryStatus.Cancelled,
    InqueryStatus.InfRqsted,
    InqueryStatus.Notavailable,
    InqueryStatus.Quoted,
    InqueryStatus.Confirmed,
    InqueryStatus.AnsweredAndRelaunched,
    InqueryStatus.Answered
  ];

  clinics: string[] = [
    'City Health Clinic',
    'Green Valley Medical Center',
    'Sunrise Health Clinic',
    'Lakeside Family Clinic',
    'Mountain View Clinic',
  ];

  sex: string[] = ['Male', 'Female'];

  countries: string[] = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
  ];

  getInquiries(): Observable<Inquiry[]> {
    const url = `${this.baseUrl}/dossiers`
    return this.httpClientService.get<Inquiry[]>(url);
    // const inquiries: Inquiry[] = Array.from({ length: 15 }, () => ({
    //   Id: Math.floor(Math.random() * 1000).toString(), // Random string
    //   PatientName: this.getRandomItem(this.patientNames),
    //   MedicalProcedure: this.getRandomItem(this.medicalProcedures),
    //   ReceptionDate: new Date(),
    //   AnswerDate: new Date(),
    //   CoordinatorName: this.getRandomItem(this.coordinators),
    //   CaseManagerName: this.getRandomItem(this.caseManagers),
    //   Status: this.getRandomItem(this.statuses),
    //   Country: this.getRandomItem(this.countries),
    //   Clinic: this.getRandomItem(this.clinics),
    //   Age: Math.floor(Math.random() * 100), // Random number between 0 and 100
    //   Sex: this.getRandomItem(this.sex),
    //   DesiredCity: 'New York',
    //   Smoker: Math.random() < 0.5, // Random boolean
    //   NatibeLanguage: 'English',
    // }));

    // return of(inquiries);
  }

  getAppointments(inquiryId: string): Observable<Appointment[]> {
    const url = `${this.baseUrl}/rdvsbydossierid/${inquiryId}`
    return this.httpClientService.get<Appointment[]>(url);
    // const appointments: Appointment[] = Array.from({ length: 5 }, () => ({
    //   hospital: this.getRandomItem(this.clinics),
    //   date: new Date(),
    //   status: this.getRandomItem(this.statuses),
    //   payment: Math.floor(Math.random() * 10000), // Random number between 0 and 10000
    //   hotel: this.getRandomItem(this.countries),
    // }));

    // return of(appointments);
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



  private getRandomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }
}
