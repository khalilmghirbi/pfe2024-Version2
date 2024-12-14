import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointementDialogComponent } from './appointement-dialog.component';

describe('AppointementDialogComponent', () => {
  let component: AppointementDialogComponent;
  let fixture: ComponentFixture<AppointementDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppointementDialogComponent]
    });
    fixture = TestBed.createComponent(AppointementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
