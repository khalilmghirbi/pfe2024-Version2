import { Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ClinicService } from '../services/clinic.service';
import { MatDialog } from '@angular/material/dialog';
import { Doctor } from '../models/doctor';
import { ActivatedRoute, Params } from '@angular/router';
import { AddDoctorDialogComponent } from '../add-doctor-dialog/add-doctor-dialog.component';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent {
  doctors$!: Observable<Doctor[]>;
  constructor(private clinicService: ClinicService, private activatedRoute: ActivatedRoute, private dialog: MatDialog) {
    this.doctors$ = this.activatedRoute.params.pipe(
      switchMap((params: Params) => {
        const id = params['id'];
        return this.clinicService.getDoctors(id);
      })
    );
  }

  add() {
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px' // Set maximum width
    };
    this.dialog.open(AddDoctorDialogComponent, dialogConfig);
  }

  edit(doctor: Doctor){
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px', // Set maximum width
      data: doctor
    };
    this.dialog.open(AddDoctorDialogComponent, dialogConfig);
  }

  remove(doctor: Doctor){
    this.clinicService.removeDoctor(doctor.id);
  }
}
