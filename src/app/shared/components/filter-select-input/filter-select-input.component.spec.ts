import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSelectInputComponent } from './filter-select-input.component';

describe('FilterSelectInputComponent', () => {
  let component: FilterSelectInputComponent;
  let fixture: ComponentFixture<FilterSelectInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterSelectInputComponent]
    });
    fixture = TestBed.createComponent(FilterSelectInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
