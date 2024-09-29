import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inquiries-filter',
  templateUrl: './inquiries-filter.component.html',
  styleUrls: ['./inquiries-filter.component.scss']
})
export class InquiriesFilterComponent implements OnInit {

  constructor(private formbuilder: FormBuilder) { }

  form!:FormGroup;
  dateRange!: FormGroup;
  options = {
    procedures: ['Brain', 'Heart', 'Spain'],
    status: ['Good', 'Bad', 'Ugly'],
    clinics: ['Clinique les Jasmins'],
    caseManagers: ['Amine', 'Mohamed', 'Ali'],
    countries: ['France', 'Tunis', 'Suisse']  
  }

  get procedure():FormControl<string> {
    return this.form.get('procedure') as FormControl<string>;
  }

  get patient():FormControl<string> {
    return this.form.get('patient') as FormControl<string>;
  }

  get status():FormControl<string> {
    return this.form.get('status') as FormControl<string>;
  }

  get clinic():FormControl<string> {
    return this.form.get('clinic') as FormControl<string>;
  }

  get caseManager():FormControl<string> {
    return this.form.get('caseManager') as FormControl<string>;
  }

  get country():FormControl<string> {
    return this.form.get('country') as FormControl<string>;
  }

  get receptionDate():FormGroup {
    return this.form.get('receptionDate') as FormGroup;
  }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      patient: [''],
      receptionDate: this.formbuilder.group({
        from: [''],
        to: ['']
      }),
      procedure: [''],
      status: [''],
      clinic: [''],
      caseManager: [''],
      country: ['']
    });
  }
    



}
