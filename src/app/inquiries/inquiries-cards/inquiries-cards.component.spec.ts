import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiriesCardsComponent } from './inquiries-cards.component';

describe('InquiriesCardsComponent', () => {
  let component: InquiriesCardsComponent;
  let fixture: ComponentFixture<InquiriesCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InquiriesCardsComponent]
    });
    fixture = TestBed.createComponent(InquiriesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
