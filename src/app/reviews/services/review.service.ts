import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Review } from '../models/review';
import { ReviewStatus } from '../enum/review-status';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }
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

  getReviews(): Observable<Review[]> {
    const reviews: Review[] = Array.from({ length: 5 }, () => ({
      id : Math.floor(Math.random() * 1000) + 1,
      receptionDate: new Date(),
      patienName: this.getRandomItem(this.patientNames),
      procedure: this.getRandomItem(this.medicalProcedures),
      hospital: this.getRandomItem(this.clinics),
      caseManger: this.getRandomItem(this.caseManagers),
      message: 'The staff was very professional and the procedure went smoothly. Highly recommend this clinic!',
      rate : Math.floor(Math.random() * 5) + 1,
      status: this.getRandomItem(this.statuses)
    }));

    return of(reviews).pipe(delay(1000));
  }

  replyReview(id: Number, reply: string) {
    console.log('Replying to review with id:', id, 'and message:', reply);
    return of({}).pipe(delay(1000));
  }

  private getRandomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }
}
