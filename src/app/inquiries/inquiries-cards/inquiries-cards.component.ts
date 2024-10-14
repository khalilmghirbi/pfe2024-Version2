import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { InquiriesService } from '../services/inquiries.service';
import { Inquiry } from '../models/inquiry';
import { InqueryStatus } from '../enums/inquery-status';
import { Filter } from '../models/filter';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-inquiries-cards',
  templateUrl: './inquiries-cards.component.html',
  styleUrls: ['./inquiries-cards.component.scss'],
})
export class InquiriesCardsComponent {
  filters: BehaviorSubject<Filter> = new BehaviorSubject<Filter>({});
  inquiries$!: Observable<Inquiry[]>;
  status = InqueryStatus;
  constructor(private inquiriesService: InquiriesService) {
    this.inquiries$ = combineLatest([
      this.inquiriesService.getInquiries(),
      this.filters$,
    ]).pipe(
      map(([inquiries, filters]) =>
        inquiries.filter((inquiry) => this.checkForFilter(inquiry, filters))
      )
    );
  }

  get filters$(): Observable<Filter> {
    return this.filters.asObservable();
  }

  get filtersValue(): Filter {
    return this.filters.value;
  }

  handleSearch(searchValue: string) {
    this.filters.next({ ...this.filtersValue, search: searchValue });
  }

  handleAdvancedFilter(advancedFilter: Filter) {
    this.filters.next({ ...this.filtersValue, ...advancedFilter });
  }

  private checkForFilter(inquiries: Inquiry, filter: Filter): boolean {
    if (!filter) {
      return true;
    }
    var serachFilter = inquiries.PatientName.toLowerCase().includes(
      filter.search?.toLowerCase() ?? ''
    );

    let dateRangeFilter = true;
    if (filter.dateRange) {
      const { from, to } = filter.dateRange;
      dateRangeFilter =
        from && to
          ? inquiries.AnswerDate >= from && inquiries.AnswerDate <= to
          : true;
    }

    const statusFilter: boolean = this.ArrayFilter(
      inquiries.Status,
      filter.status
    );
    const procedureFilter: boolean = this.ArrayFilter(
      inquiries.MedicalProcedure,
      filter.procedure
    );
    const clinicFilter: boolean = this.ArrayFilter(
      inquiries.Clinic,
      filter.clinic
    );
    const caseManagerFilter: boolean = this.ArrayFilter(
      inquiries.CaseManagerName,
      filter.caseManager
    );

    const countryFilter: boolean = this.ArrayFilter(
      inquiries.Country,
      filter.country
    );

    return (
      serachFilter &&
      dateRangeFilter &&
      statusFilter &&
      procedureFilter &&
      clinicFilter &&
      caseManagerFilter &&
      countryFilter
    );
  }

  private ArrayFilter<T>(item: T, filter: T[] | undefined): boolean {
    return !filter || filter.length === 0 || filter.includes(item);
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
  }
}
