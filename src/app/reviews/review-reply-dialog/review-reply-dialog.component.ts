import { Component, Inject } from '@angular/core';
import { ReviewService } from '../services/review.service';
import { Review } from '../models/review';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormArrayName, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-review-reply-dialog',
  templateUrl: './review-reply-dialog.component.html',
  styleUrls: ['./review-reply-dialog.component.scss'],
})
export class ReviewReplyDialogComponent {
  formGroup!: FormGroup;
  constructor(
    public reviewService: ReviewService,
    public formbuilder: FormBuilder,
    public dialogRef: MatDialogRef<ReviewReplyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Review
  ) {
    this.formGroup = formbuilder.group({
      comment: [{ value: data.message, disabled: true }],
      reply: [''],
    });
  }

  
  public get commentControl() : FormControl<string> {
    return this.formGroup.get('comment') as FormControl<string>;
  }

  public get replyControl() : FormControl<string> {
    return this.formGroup.get('reply') as FormControl<string>;
  }
  

  onSubmit() {
    console.log(this.formGroup.value)
    this.reviewService.replyReview(this.data.id, this.formGroup.value.reply).subscribe(
      console.log
    );
  }
}
