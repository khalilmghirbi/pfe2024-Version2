import { Component } from '@angular/core';
import { CaseManager } from '../models/case-manager';
import { NEVER, Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddCaseManagerDialogComponent } from '../add-case-manager-dialog/add-case-manager-dialog.component';
import { ManagerService } from '../services/manager.service';
import { ClinicService } from 'src/app/shared/services/clinic.service';

@Component({
  selector: 'app-case-managers',
  templateUrl: './case-managers.component.html',
  styleUrls: ['./case-managers.component.scss']
})
export class CaseManagersComponent {
  caseManager$!: Observable<CaseManager[]>;
  hopitalId!: string;
  constructor(
    private managerService: ManagerService,
    private clinicService: ClinicService,
    private dialog: MatDialog
  ) {
    this.caseManager$ = this.clinicService.activeClinics$.pipe(
      switchMap((clinicId: number | null) => {
        if (!clinicId) {
          return NEVER;
        }
        this.hopitalId = clinicId.toString();
        return this.managerService.getCaseManagers(this.hopitalId);
      })
    );
  }

  add() {
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px', // Set maximum width
    };
    this.dialog.open(AddCaseManagerDialogComponent, dialogConfig).afterClosed().subscribe((caseManger: CaseManager)=>{
      if(caseManger){
        this.managerService.addCaseManager(this.hopitalId,caseManger).subscribe(()=>{
          this.caseManager$ = this.managerService.getCaseManagers(this.hopitalId);
        });
      }
    });
  }

  edit(contact: CaseManager) {
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px', // Set maximum width
      data: contact,
    };
    this.dialog.open(AddCaseManagerDialogComponent, dialogConfig).afterClosed().subscribe((caseManger: CaseManager)=>{
      if(caseManger){
        this.managerService.updateCaseManager(caseManger.id,caseManger).subscribe(()=>{
          this.caseManager$ = this.managerService.getCaseManagers(this.hopitalId);
        });
      }
    });
  }

  remove(contact: CaseManager) {
    this.managerService.deleteCaseManager(contact.id).subscribe(() =>{
      this.caseManager$ = this.managerService.getCaseManagers(this.hopitalId);
    });
  }
}
