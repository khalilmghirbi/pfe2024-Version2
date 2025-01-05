import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { InquiriesService } from '../services/inquiries.service';
import { Inquiry } from '../models/inquiry';
import { InqueryStatus } from '../enums/inquery-status';
import { Filter } from '../models/filter';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';
import { InfoItem } from '../models/info-item';
import { Router } from '@angular/router';
import { AppointementDialogComponent } from '../appointement-dialog/appointement-dialog.component';

@Component({
  selector: 'app-inquiries-cards',
  templateUrl: './inquiries-cards.component.html',
  styleUrls: ['./inquiries-cards.component.scss'],
})
export class InquiriesCardsComponent {
  filters: BehaviorSubject<Filter> = new BehaviorSubject<Filter>({});
  inquiries$!: Observable<Inquiry[]>;
  status = InqueryStatus;
  constructor(
    private inquiriesService: InquiriesService,
    public dialog: MatDialog,
    public router: Router
  ) {
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

  displayInfo(inquiry: Inquiry) {
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px', // Set maximum width
      data: this.ToDialoginfo(inquiry),
    };
    this.dialog.open(InfoDialogComponent, dialogConfig);
  }

  dispalyAppointments(inquiry: Inquiry) {
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px', // Set maximum width
      data: inquiry.Id,
    };
    this.dialog.open(AppointementDialogComponent, dialogConfig);
  }

  private ToDialoginfo(inquiry: Inquiry): { title: string; content: InfoItem[] } {
    return {
      title: "Inquiry Information",
      content: [
        { title: 'Patient Name', value: inquiry.PatientName },
        { title: 'Medical Procedure', value: inquiry.MedicalProcedure },
        { title: 'Reception Date', value: new Date(inquiry.ReceptionDate).toDateString() },
        { title: 'Answer Date', value: new Date(inquiry.AnswerDate).toDateString() },
        { title: 'Coordinator Name', value: inquiry.CoordinatorName },
        { title: 'Case Manager Name', value: inquiry.CaseManagerName },
        { title: 'Clinic', value: inquiry.Clinic },
        { title: 'Country', value: inquiry.Country },
        { title: 'Age', value: inquiry.Age?.toString() ?? "" },
        { title: 'Sex', value: inquiry.Sex?.toString() ?? "" },
        { title: 'City', value: inquiry.DesiredCity?.toString() ?? "" },
        { title: 'Smoker', value: inquiry.Smoker ? "true" : "false" },
        { title: 'NativeLanguage', value: inquiry.NatibeLanguage?.toString() ?? "" },
        { title: 'Status', value: inquiry.Status, highlighted: true, Style: this.getStatusClass(inquiry) },
      ],
    }
  }

  getStatusClass(inquiry: Inquiry): string {
    switch (inquiry.Status) {
      case this.status.InfRqsted:
        return 'infRqsted-bg';  // Light grey for InfRqsted
      case this.status.Awaiting:
        return 'awaiting-bg';   // Deep orange for Awaiting
      case this.status.Quoted:
        return 'quoted-bg';     // Bright blue for Quoted
      case this.status.Confirmed:
        return 'confirmed-bg';  // Green for Confirmed
      case this.status.Answered:
        return 'answered-bg';   // Teal for Answered
      case this.status.AnsweredAndRelaunched:
        return 'answeredAndRelaunched-bg';  // Orange-red for AnsweredAndRelaunched
      case this.status.Cancelled:
        return 'cancelled-bg';  // Dark red for Cancelled
      case this.status.Notavailable:
        return 'notavailable-bg'; // Light grey for Notavailable
      default:
        return 'infRqsted-bg';  // Default to light grey if no match
    }
  }
}
