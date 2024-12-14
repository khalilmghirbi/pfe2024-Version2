import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedFilterDialogComponent } from './advanced-filter-dialog.component';

describe('AdvancedFilterDialogComponent', () => {
  let component: AdvancedFilterDialogComponent;
  let fixture: ComponentFixture<AdvancedFilterDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdvancedFilterDialogComponent]
    });
    fixture = TestBed.createComponent(AdvancedFilterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
