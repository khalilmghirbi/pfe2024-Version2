import { Injectable } from '@angular/core';
import { delay, interval, map, Observable, of } from 'rxjs';
import { Inquiry } from '../models/inquiry';
import { InqueryStatus } from '../enums/inquery-status';
import { Kpi } from '../models/kpi';

@Injectable({
  providedIn: 'root'
})
export class InquiriesService {

  constructor() { }


  getInquiries():Observable<Inquiry[]> {
    // this.httpClint.get('http://localhost:3000/inquiries');
    const patientNames = ['Amine Mghirbi', 'Khalil Mghirbi', 'Alice Smith', 'Bob Johnson', 'Charlie Brown', 'David Wilson', 'Eve Davis', 'Faythe Miller', 'Grace Lee', 'Heidi Thompson'];
    const medicalProcedures = ['Brain Surgery', 'Knee Replacement', 'Heart Bypass', 'Cataract Surgery', 'Gallbladder Removal', 'Hip Replacement', 'Spinal Fusion', 'Liver Biopsy', 'Appendectomy', 'Hernia Repair'];
    const coordinators = ['Jane Doe', 'John Doe', 'Sara Connor', 'Peter Parker', 'Clark Kent'];
    const caseManagers = ['Tony Stark', 'Bruce Wayne', 'Diana Prince', 'Natasha Romanoff', 'Wade Wilson'];
    const statuses = [
      InqueryStatus.Pending,
      InqueryStatus.Rejected,
      InqueryStatus.InProgress,
      InqueryStatus.Closed,
      InqueryStatus.New
    ];
    const inquiries: Inquiry[] = Array.from({ length: 7 }, () => ({
      PatientName: this.getRandomItem(patientNames),
      MedicalProcedure: this.getRandomItem(medicalProcedures),
      ReceptionDate: new Date(),
      AnswerDate: new Date(),
      CoordinatorName: this.getRandomItem(coordinators),
      CaseManagerName: this.getRandomItem(caseManagers),
      Status: this.getRandomItem(statuses)
    }));

    return of(inquiries).pipe(delay(1000));
  }

  getKpis():Observable<Kpi> {
    return interval(5000).pipe( // Emit a value every 5 seconds
      map(() => {
        const kpi: Kpi = {
          QuatedRate: Math.floor(Math.random() * 101), // Random number between 0 and 100
          ResponseTime: Math.floor(Math.random() * 101), // Random number between 0 and 100
          WaitingConfirmation: Math.floor(Math.random() * 101) // Random number between 0 and 100
        };
        return kpi;
      })
    );
  }

  private getRandomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }
}
