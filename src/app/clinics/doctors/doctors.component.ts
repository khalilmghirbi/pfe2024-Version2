import { Component } from '@angular/core';
import { NEVER, Observable, switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { Doctor } from '../models/doctor';
import { ActivatedRoute, Params } from '@angular/router';
import { AddDoctorDialogComponent } from '../add-doctor-dialog/add-doctor-dialog.component';
import { DoctorService } from '../services/doctor.service';
import { ClinicService } from 'src/app/shared/services/clinic.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent {
  doctors$!: Observable<Doctor[]>;
  hopitalId!: string;
  constructor(private doctorService: DoctorService, private clinicService: ClinicService, private dialog: MatDialog) {
    this.loadDoctors()
  }

  add() {
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px' // Set maximum width
    };
    this.dialog.open(AddDoctorDialogComponent, dialogConfig).afterClosed().subscribe((doctor: Doctor)=>{
      if(doctor){
        this.doctorService.addDoctor(this.hopitalId,doctor).subscribe(()=>{
          this.doctors$ = this.doctorService.getDoctors(this.hopitalId);
        });
      }
    });;
  }

  loadDoctors(){
    this.doctors$ = this.clinicService.activeClinics$.pipe(
      switchMap((clinicId: number | null) => {
        if (!clinicId) {
          return NEVER;
        }
        this.hopitalId = clinicId.toString();
        return this.doctorService.getDoctors(this.hopitalId);
      })
    );
  }

  edit(doctor: Doctor){
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px', // Set maximum width
      data: doctor
    };
    this.dialog.open(AddDoctorDialogComponent, dialogConfig).afterClosed().subscribe((doctor: Doctor)=>{
      if(doctor){
        this.doctorService.updateDoctor(doctor.id,doctor).subscribe(()=>{
          this.doctors$ = this.doctorService.getDoctors(this.hopitalId);
        });
      }
    });;
  }

  remove(doctor: Doctor){
    this.doctorService.deleteDoctor(doctor.id).subscribe(() => {
      this.doctors$ = this.doctorService.getDoctors(this.hopitalId);
    });
  }
}
