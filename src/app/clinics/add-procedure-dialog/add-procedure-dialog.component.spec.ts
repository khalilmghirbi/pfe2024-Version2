import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProcedureDialogComponent } from './add-procedure-dialog.component';

describe('AddProcedureDialogComponent', () => {
  let component: AddProcedureDialogComponent;
  let fixture: ComponentFixture<AddProcedureDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProcedureDialogComponent]
    });
    fixture = TestBed.createComponent(AddProcedureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
