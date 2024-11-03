import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { InquiriesService } from '../services/inquiries.service';
import { catchError, map, merge, of, startWith, switchMap } from 'rxjs';
import { Inquiry } from '../models/inquiry';


@Component({
  selector: 'app-inquiries-table',
  templateUrl: './inquiries-table.component.html',
  styleUrls: ['./inquiries-table.component.scss']
})
export class InquiriesTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['Patient', 'Medical Procedure', 'Reception Date', 'Answer Date', 'Coordinator' , 'Case Manager', 'Status', 'Actions'];
  data:Inquiry[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public inquiriesService: InquiriesService) {    
  }

  ngAfterViewInit() {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.inquiriesService!.getInquiries(
          ).pipe(catchError(() => of(null)));
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = data === null;

          if (data === null) {
            return [];
          }

          // Only refresh the result length if there is new data. In case of rate
          // limit errors, we do not want to reset the paginator to zero, as that
          // would prevent users from re-triggering requests.
          this.resultsLength = data.length;
          return data;
        }),
      )
      .subscribe(data => (this.data = data));
  }
}

