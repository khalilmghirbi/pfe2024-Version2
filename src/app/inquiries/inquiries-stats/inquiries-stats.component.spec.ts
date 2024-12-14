import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiriesStatsComponent } from './inquiries-stats.component';

describe('InquiriesStatsComponent', () => {
  let component: InquiriesStatsComponent;
  let fixture: ComponentFixture<InquiriesStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InquiriesStatsComponent]
    });
    fixture = TestBed.createComponent(InquiriesStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
