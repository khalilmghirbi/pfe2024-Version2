import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsTableComponent } from './reviews-table.component';

describe('ReviewsTableComponent', () => {
  let component: ReviewsTableComponent;
  let fixture: ComponentFixture<ReviewsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewsTableComponent]
    });
    fixture = TestBed.createComponent(ReviewsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
