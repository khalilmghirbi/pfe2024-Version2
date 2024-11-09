import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { User } from '../models/user';
import { UpdateUserDialogComponent } from '../update-user-dialog/update-user-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  private managerNames: string[] = [
    'John Doe',
    'Jane Smith',
    'Alice Johnson',
    'Robert Brown',
    'Emily Davis',
    'Michael Wilson',
    'Sarah Miller',
    'David Anderson',
    'Laura Thomas',
    'James Jackson',
  ];

  private emails: string[] = [
    'john@example.com',
    'jane@example.com',
    'alice@example.com',
    'robert@example.com',
    'emily@example.com',
    'michael@example.com',
    'sarah@example.com',
    'david@example.com',
    'laura@example.com',
    'james@example.com',
  ];

  private phones: string[] = [
    '123-456-7890',
    '987-654-3210',
    '555-555-5555',
    '444-444-4444',
    '333-333-3333',
    '222-222-2222',
    '111-111-1111',
    '666-666-6666',
    '777-777-7777',
    '888-888-8888',
  ];

  private hospitals: string[] = [
    'Mayo Clinic',
    'Cleveland Clinic',
    'Johns Hopkins Hospital',
    'Massachusetts General Hospital',
    'UCLA Medical Center',
    'Cedars-Sinai Medical Center',
    'NewYork-Presbyterian Hospital',
    'UCSF Medical Center',
    'Northwestern Memorial Hospital',
    'NYU Langone Hospitals',
  ];

  private countries: string[] = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'France',
    'Italy',
    'Spain',
    'Japan',
    'China',
  ];

  constructor(public dialog: MatDialog) {}

  getManagers(): Observable<User[]> {
    const users: User[] = Array.from({ length: 13 }, () => ({
      id: Math.floor(Math.random() * 101), // Random string
      name: this.getRandomItem(this.managerNames),
      email: this.getRandomItem(this.emails),
      phone: this.getRandomItem(this.phones),
      hopital: this.getRandomItem(this.hospitals),
      country: this.getRandomItem(this.countries),
    }));

    return of(users);
  }

  removeManager(id: number) {
    console.log('Removing manager with id:', id);
    return of({});
  }

  updateManager(id: number, user: User) {
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px', // Set maximum width
      data: user,
    };
    this.dialog.open(UpdateUserDialogComponent, dialogConfig);
  }

  private getRandomItem<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }
}
