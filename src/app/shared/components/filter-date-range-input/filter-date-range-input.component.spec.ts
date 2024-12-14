import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterDateRangeInputComponent } from './filter-date-range-input.component';

describe('FilterDateRangeInputComponent', () => {
  let component: FilterDateRangeInputComponent;
  let fixture: ComponentFixture<FilterDateRangeInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterDateRangeInputComponent]
    });
    fixture = TestBed.createComponent(FilterDateRangeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
