import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  accessToken: string;

  constructor() {
    this.accessToken = 'f47c92a8-8a7e-43b7-bdda-bf77a57c3d1c';
  }
}
