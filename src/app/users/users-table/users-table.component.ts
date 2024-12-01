import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { User } from '../models/user';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ManagerService } from '../services/manager.service';
import {
  Subscription,
} from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { UpdateUserDialogComponent } from '../update-user-dialog/update-user-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit, OnDestroy, AfterViewInit {
  displayedColumns: string[] = [
    'Name',
    'Email',
    'Phone',
    'Hospital',
    'Country',
    'Actions',
  ];
  dataSource = new MatTableDataSource<User>();

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  subscription!: Subscription;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public managerService: ManagerService, public dialog:MatDialog) {}
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.managerService.getManagers().subscribe((data) => {
      this.dataSource.data = data;
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  edit(user: User) {
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px', // Set maximum width
      data: user,
    };
    this.dialog.open(UpdateUserDialogComponent, dialogConfig).afterClosed().subscribe(
      () => {
        this.subscription = this.managerService.getManagers().subscribe((data) => {
          this.dataSource.data = data;
        });
      }
    );
    }

  remove(user: User) {
    this.managerService.removeManager(user.id).subscribe(()=>{
      this.subscription = this.managerService.getManagers().subscribe((data) => {
        this.dataSource.data = data;
      });
    });

  }
}
