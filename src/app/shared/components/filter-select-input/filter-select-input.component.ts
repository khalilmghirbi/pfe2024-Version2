import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-select-input',
  templateUrl: './filter-select-input.component.html',
  styleUrls: ['./filter-select-input.component.scss']
})
export class FilterSelectInputComponent {
  @Input() control!: FormControl<string[]>;
  @Input() options!: string[] | null;
  @Input() label!: string;
}
