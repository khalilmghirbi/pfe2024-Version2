import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  Subscription,
} from 'rxjs';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import { Breakpoints } from '../models/kpi';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdvancedFilterDialogComponent } from '../advanced-filter-dialog/advanced-filter-dialog.component';
import { Filter } from '../models/filter';

@Component({
  selector: 'app-inquiries-filter',
  templateUrl: './inquiries-filter.component.html',
  styleUrls: ['./inquiries-filter.component.scss'],
})
export class InquiriesFilterComponent implements OnInit, OnDestroy {
  showLabel$!: Observable<boolean>;
  searchForm!: FormGroup;
  subscription!: Subscription;

  @Output() search = new EventEmitter<string>();
  @Output() advancedFilter = new EventEmitter<Filter>();
  /**
   *
   */
  constructor(
    private formBuilder: FormBuilder,
    private responsiveService: ResponsiveService,
    public dialog: MatDialog,
  ) {
    this.showLabel$ = this.responsiveService.currentBreakpoint.pipe(
      map(
        (breakpoint) =>
          breakpoint !== Breakpoints.Small && breakpoint !== Breakpoints.XSmall
      )
    );
    this.searchForm = this.formBuilder.group({
      search: [''],
    });
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription = this.SearchControl.valueChanges
      .pipe(debounceTime(100), distinctUntilChanged())
      .subscribe((value) => {
        this.search.emit(value);
      });
  }

  public get SearchControl(): FormControl {
    return this.searchForm.get('search') as FormControl;
  }

  showAdvancedFilter() {
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px', // Set maximum width
    };
    const dialogRef = this.dialog.open(
      AdvancedFilterDialogComponent,
      dialogConfig
    );
    this.subscription.add(
      dialogRef.afterClosed().subscribe((filter: Filter) => {
        localStorage.setItem('filter', JSON.stringify(filter));
        this.advancedFilter.emit(filter);
      })
    );
  }

  reset() {
    this.searchForm.reset();
  }
}
