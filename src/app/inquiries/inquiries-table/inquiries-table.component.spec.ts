import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiriesTableComponent } from './inquiries-table.component';

describe('InquiriesTableComponent', () => {
  let component: InquiriesTableComponent;
  let fixture: ComponentFixture<InquiriesTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InquiriesTableComponent]
    });
    fixture = TestBed.createComponent(InquiriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
