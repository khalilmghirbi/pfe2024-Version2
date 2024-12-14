import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-date-range-input',
  templateUrl: './filter-date-range-input.component.html',
  styleUrls: ['./filter-date-range-input.component.scss'],
})
export class FilterDateRangeInputComponent {
  constructor() {}
  @Input() control!: FormGroup;
  @Input() label!: string;

  ngoninit(): void {
  }
  get from():FormControl<string> {
    return this.control.get('from') as FormControl<string>;
  }

  get to():FormControl<string> {
    return this.control.get('to') as FormControl<string>;
  }
  
}
