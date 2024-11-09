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

  constructor(public managerService: ManagerService) {}
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
    this.managerService.updateManager(user.id, user);
  }

  remove(user: User) {
    this.managerService.removeManager(user.id).subscribe();
  }
}
