import { Component } from '@angular/core';
import { NEVER, Observable, switchMap } from 'rxjs';
import { Treatment } from '../models/treatment';
import { MatDialog } from '@angular/material/dialog';
import { AddProcedureDialogComponent } from '../add-procedure-dialog/add-procedure-dialog.component';
import { TreatmentService } from '../services/treatment.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ClinicComponent } from '../clinic/clinic.component';
import { ClinicService } from 'src/app/shared/services/clinic.service';

@Component({
  selector: 'app-treatments',
  templateUrl: './treatments.component.html',
  styleUrls: ['./treatments.component.scss'],
})
export class TreatmentsComponent {
  treatments$!: Observable<Treatment[]>;
  hopitalId!: string;
  constructor(private treatmentService: TreatmentService, private dialog: MatDialog, private clinicService: ClinicService) {
    this.treatments$ = this.clinicService.activeClinics$.pipe(
      switchMap((clinicId: number | null) => {
        if (!clinicId) {
          return NEVER;
        }
        this.hopitalId = clinicId.toString();
        return this.treatmentService.getTreatments(this.hopitalId);
      })
    );
  }

  add() {
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px' // Set maximum width
    };
    this.dialog.open(AddProcedureDialogComponent, dialogConfig).afterClosed().subscribe((treatment: Treatment) => {
      if (treatment) {
        this.treatmentService.addTreatment(this.hopitalId, treatment).subscribe(() => {
          this.treatments$ = this.treatmentService.getTreatments(this.hopitalId);
        });
      }
    });
  }
}
