import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Inquiry } from '../models/inquiry';
import { InqueryStatus } from '../enums/inquery-status';

@Injectable({
  providedIn: 'root'
})
export class InquiriesService {

  constructor(private httpClint:HttpClient) { }

  getInquiries():Observable<Inquiry[]> {
    // this.httpClint.get('http://localhost:3000/inquiries');
    const inquiries:Inquiry[] = [{
      PatientName: 'Amine Mghirbi',
      MedicalProcedure: 'Brain Surgery',
      ReceptionDate: new Date(),
      AnswerDate: new Date(),
      CoordinatorName: 'Jane Doe',
      CaseManagerName: 'John Doe',
      Status: InqueryStatus.Pending
    },{
      PatientName: 'Khalil Mghirbi',
      MedicalProcedure: 'brain Surgery',
      ReceptionDate: new Date(),
      AnswerDate: new Date(),
      CoordinatorName: 'Jane Doe',
      CaseManagerName: 'John Doe',
      Status: InqueryStatus.Pending
    }];
    return of(inquiries).pipe(delay(1000));
  }
}
