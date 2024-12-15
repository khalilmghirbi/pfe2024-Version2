import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { InquiriesService } from '../services/inquiries.service';
import { Filter } from '../models/filter';
import { Inquiry } from '../models/inquiry';

@Component({
  selector: 'app-advanced-filter-dialog',
  templateUrl: './advanced-filter-dialog.component.html',
  styleUrls: ['./advanced-filter-dialog.component.scss'],
})
export class AdvancedFilterDialogComponent implements OnInit {
  /**
   *
   */
  constructor(
    public dialogRef: MatDialogRef<AdvancedFilterDialogComponent>,
    private formbuilder: FormBuilder,
    public iquiryService: InquiriesService
  ) {}

  form!: FormGroup;
  dateRangeForm!: FormGroup;
  canResetFilter: boolean = false;
  procedures!: string[];
  statuses!: string[];
  clinics!: string[];
  casemanagers!: string[];
  countries!: string[];

  get procedure(): FormControl<string[]> {
    return this.form.get('procedure') as FormControl<string[]>;
  }

  get status(): FormControl<string[]> {
    return this.form.get('status') as FormControl<string[]>;
  }

  get clinic(): FormControl<string[]> {
    return this.form.get('clinic') as FormControl<string[]>;
  }

  get caseManager(): FormControl<string[]> {
    return this.form.get('caseManager') as FormControl<string[]>;
  }

  get country(): FormControl<string[]> {
    return this.form.get('country') as FormControl<string[]>;
  }

  get dateRange(): FormGroup {
    return this.form.get('dateRange') as FormGroup;
  }

  ngOnInit(): void {
    this.iquiryService.getInquiries()
      .subscribe((inquiries:Inquiry[])=>{
        this.procedures = [...new Set<string>(inquiries.map(x => x.MedicalProcedure).filter(value => !!value))];
        this.statuses = [...new Set<string>(inquiries.map(x => x.Status).filter(value => !!value))];
        this.clinics = [...new Set<string>(inquiries.map(x => x.Clinic).filter(value => !!value))];
        this.casemanagers = [...new Set<string>(inquiries.map(x => x.CaseManagerName).filter(value => !!value))];
        this.countries = [...new Set<string>(inquiries.map(x => x.Country).filter(value => !!value))];

      })
    this.form = this.formbuilder.group({
      dateRange: this.formbuilder.group({
        from: [''],
        to: [''],
      }),
      procedure: [[]],
      status: [[]],
      clinic: [[]],
      caseManager: [[]],
      country: [[]],
    });
    const storedFilter: Filter = JSON.parse(localStorage.getItem('filter') ?? '{}');
    if (storedFilter) {
      this.canResetFilter = true;
      this.form.patchValue(storedFilter);
    }
  }

  reset() {
    this.form.reset();
    console.log(this.form);
    localStorage.removeItem('filter');
  }
}
