import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter-select-input',
  templateUrl: './filter-select-input.component.html',
  styleUrls: ['./filter-select-input.component.scss']
})
export class FilterSelectInputComponent {
  @Input() control!: FormControl<string[] | string>;
  @Input() options!: string[] | null;
  @Input() label!: string;
  @Input() multiple: boolean = true;


  public get ControlValue(): string[] {
    return Array.isArray(this.control.value) ? this.control.value : [this.control.value]
  }


}
