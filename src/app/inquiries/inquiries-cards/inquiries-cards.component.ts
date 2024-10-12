import { Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map, Observable, tap } from 'rxjs';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import { InquiriesService } from '../services/inquiries.service';
import { Inquiry } from '../models/inquiry';
import { InqueryStatus } from '../enums/inquery-status';

@Component({
  selector: 'app-inquiries-cards',
  templateUrl: './inquiries-cards.component.html',
  styleUrls: ['./inquiries-cards.component.scss']
})
export class InquiriesCardsComponent implements OnInit {

  searchForm!: FormGroup;
  showLabel$!: Observable<boolean>;
  inquiries$!: Observable<Inquiry[]>;
  status = InqueryStatus;
  constructor(private formBuilder: FormBuilder, private responsiveService:ResponsiveService, private inquiriesService:InquiriesService) {
    this.showLabel$ = this.responsiveService.currentBreakpoint.
    pipe(
      tap(console.log),
      map(breakpoint => breakpoint !== Breakpoints.Small && breakpoint !== Breakpoints.XSmall)
    );
    this.inquiries$ = this.inquiriesService.getInquiries();
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      search: ['']
    });

  }

  
  public get SearchControl() : FormControl {
    return this.searchForm.get('search') as FormControl; 
  }
  
  reset(){
    this.searchForm.reset();
  }
}
