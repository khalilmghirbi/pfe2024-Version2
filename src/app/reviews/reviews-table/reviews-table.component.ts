import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Review } from '../models/review';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ReviewService } from '../services/review.service';
import { ReviewStatus } from '../enum/review-status';
import { MatDialog } from '@angular/material/dialog';
import { ReviewReplyDialogComponent } from '../review-reply-dialog/review-reply-dialog.component';

@Component({
  selector: 'app-reviews-table',
  templateUrl: './reviews-table.component.html',
  styleUrls: ['./reviews-table.component.scss'],
})
export class ReviewsTableComponent implements OnInit, OnDestroy, AfterViewInit {
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

  constructor(public reviewService: ReviewService, private dialog: MatDialog) {}
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit() {
    this.fetchAll();
  }

  fetchAll(){
    this.subscription = this.reviewService.getReviews().subscribe((data:Review[]) => {
      this.dataSource.data = data.map((review:Review)=>{
         review.reply ? review.status = ReviewStatus.Answered : review.status = ReviewStatus.Pending
         return review;
       });
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
    if (review.status === ReviewStatus.Pending) {
      this.dialog.open(ReviewReplyDialogComponent, dialogConfig).afterClosed().subscribe(
       ()=>{
         console.log("closed");
         this.fetchAll();
       }
      );
    }
  }
}
