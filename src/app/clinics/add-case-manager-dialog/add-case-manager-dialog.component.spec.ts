import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCaseManagerDialogComponent } from './add-case-manager-dialog.component';

describe('AddCaseManagerDialogComponent', () => {
  let component: AddCaseManagerDialogComponent;
  let fixture: ComponentFixture<AddCaseManagerDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCaseManagerDialogComponent]
    });
    fixture = TestBed.createComponent(AddCaseManagerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
