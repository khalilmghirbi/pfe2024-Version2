import { Component } from '@angular/core';
import { ClinicService } from '../services/clinic.service';
import { Observable } from 'rxjs';
import { Treatment } from '../models/treatment';
import { MatDialog } from '@angular/material/dialog';
import { AddProcedureDialogComponent } from '../add-procedure-dialog/add-procedure-dialog.component';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.scss'],
})
export class TreatmentsComponent {
  treatments$!: Observable<Treatment[]>;
  constructor(private clinicService: ClinicService, private dialog: MatDialog) {
    this.treatments$ = this.clinicService.getTreatments();
  }

  add() {
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px' // Set maximum width
    };
    this.dialog.open(AddProcedureDialogComponent, dialogConfig);
  }
}
