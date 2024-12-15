import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { NEVER, Subscription, switchMap } from 'rxjs';
import { ReviewStatus } from 'src/app/reviews/enum/review-status';
import { Review } from 'src/app/reviews/models/review';
import { ReviewReplyDialogComponent } from 'src/app/reviews/review-reply-dialog/review-reply-dialog.component';
import { ReviewService } from 'src/app/reviews/services/review.service';
import { ClinicService } from 'src/app/shared/services/clinic.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
  displayedColumns: string[] = [
    'Reception Date',
    'Patient Name',
    'Procedure',
    'Hospital',
    'Case Manager',
    'Message',
    'Rate',
    'Status',
  ];
  dataSource = new MatTableDataSource<Review>();
  status = ReviewStatus;
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  hopitalId!: string;
  subscription!: Subscription;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public reviewService: ReviewService,
    private dialog: MatDialog,
    private clinicService: ClinicService
  ) { }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit() {
    this.clinicService.activeClinics$.pipe(
      switchMap((clinicId: number | null) => {
        if (!clinicId) {
          return NEVER;
        }
        this.hopitalId = clinicId.toString();
        return this.reviewService.getReviewById(this.hopitalId);
      })
    ).subscribe((data) => {
      this.dataSource.data = data.map((review: Review) => {
        review.status = review.reply ? ReviewStatus.Answered : ReviewStatus.Pending
        return review;
      });
    });;
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  reply(review: Review) {
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px', // Set maximum width
      data: review,
    };
    this.dialog.open(ReviewReplyDialogComponent, dialogConfig);
  }
}
