import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Review } from '../models/review';
import { ReviewStatus } from '../enum/review-status';
import { HttpclientService } from 'src/app/shared/services/httpclient.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  baseUrl: string = environment.apiUrl;

  constructor(private httpClientService: HttpclientService) { }
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
  clinics: string[] = [
    'City Health Clinic',
    'Green Valley Medical Center',
    'Sunrise Health Clinic',
    'Lakeside Family Clinic',
    'Mountain View Clinic',
  ];
  caseManagers = [
    'Tony Stark',
    'Bruce Wayne',
    'Diana Prince',
    'Natasha Romanoff',
    'Wade Wilson',
  ];

  statuses = [
    ReviewStatus.Pending,
    ReviewStatus.Answered
  ];

  getReviewsByHopital(id: string): Observable<Review[]> {
    const url = `${this.baseUrl}/avisbyhopital/${id}`
    return this.httpClientService.get<Review[]>(url);
  }
  

  getReviews(): Observable<Review[]> {
    const url = `${this.baseUrl}/avis`
    return this.httpClientService.get<Review[]>(url);
  }

  getReviewById(hopitalid: string): Observable<Review[]> {
    const url = `${this.baseUrl}/avisbyhopital/${hopitalid}`
    return this.httpClientService.get<Review[]>(url);
  }

  replyReview(id: Number, reply: string) : Observable<void> {
    const url = `${this.baseUrl}/avis/${id}`
    return this.httpClientService.put<{reply:string},void>(url,{reply:reply});
    // console.log('Replying to review with id:', id, 'and message:', reply);
    // return of({});
  }

  private getRandomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }
}
