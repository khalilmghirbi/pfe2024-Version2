import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiriesFilterComponent } from './inquiries-filter.component';

describe('InquiriesFilterComponent', () => {
  let component: InquiriesFilterComponent;
  let fixture: ComponentFixture<InquiriesFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InquiriesFilterComponent]
    });
    fixture = TestBed.createComponent(InquiriesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
