import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiriesStatCardComponent } from './inquiries-stat-card.component';

describe('InquiriesStatCardComponent', () => {
  let component: InquiriesStatCardComponent;
  let fixture: ComponentFixture<InquiriesStatCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InquiriesStatCardComponent]
    });
    fixture = TestBed.createComponent(InquiriesStatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
