import { Component } from '@angular/core';
import { CaseManager } from '../models/case-manager';
import { Observable, switchMap } from 'rxjs';
import { ClinicService } from '../services/clinic.service';
import { ActivatedRoute, Params } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddCaseManagerDialogComponent } from '../add-case-manager-dialog/add-case-manager-dialog.component';

@Component({
  selector: 'app-case-managers',
  templateUrl: './case-managers.component.html',
  styleUrls: ['./case-managers.component.scss']
})
export class CaseManagersComponent {
  caseManager$!: Observable<CaseManager[]>;
  constructor(
    private clinicService: ClinicService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {
    this.caseManager$ = this.activatedRoute.params.pipe(
      switchMap((params: Params) => {
        const id = params['id'];
        return this.clinicService.getCaseManager(id);
      })
    );
  }

  add() {
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px', // Set maximum width
    };
    this.dialog.open(AddCaseManagerDialogComponent, dialogConfig);
  }

  edit(contact: CaseManager) {
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px', // Set maximum width
      data: contact,
    };
    this.dialog.open(AddCaseManagerDialogComponent, dialogConfig);
  }

  remove(contact: CaseManager) {
    this.clinicService.removeDoctor(contact.id);
  }
}
