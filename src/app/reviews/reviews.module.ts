import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewsTableComponent } from './reviews-table/reviews-table.component';
import { StarRatingModule } from 'angular-star-rating';
import { SharedModule } from '../shared/shared.module';
import { ReviewsRoutingModule } from './reviews-routing.module';
import { ReviewReplyDialogComponent } from './review-reply-dialog/review-reply-dialog.component';



@NgModule({
  declarations: [
    ReviewsTableComponent,
    ReviewReplyDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReviewsRoutingModule,
    StarRatingModule.forRoot()
  ]
})
export class ReviewsModule { }
