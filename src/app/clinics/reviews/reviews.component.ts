import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { ReviewStatus } from 'src/app/reviews/enum/review-status';
import { Review } from 'src/app/reviews/models/review';
import { ReviewReplyDialogComponent } from 'src/app/reviews/review-reply-dialog/review-reply-dialog.component';
import { ReviewService } from 'src/app/reviews/services/review.service';

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
  subscription!: Subscription;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public reviewService: ReviewService,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap((params: Params) => {
          const id = params['id'];
          return this.reviewService.getReviewById(id);
        })
      )
      .subscribe((data) => {
        this.dataSource.data = data;
      });
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
