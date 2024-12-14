import { Injectable } from '@angular/core';
import { HttpclientService } from './httpclient.service';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../models/login-response';
import { UserDetail } from '../models/user-detail';
import { TokenDetail } from '../models/token-detail';
import { LoginRequest } from '../models/login-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.apiUrl;
  constructor(private httpClientService: HttpclientService) {}
  private loginResponse: BehaviorSubject<TokenDetail | null> =
    new BehaviorSubject<TokenDetail | null>(this.loadTokenFromStorage());

  get token(): string | undefined {
    return this.loginResponse.value?.token;
  }

  get userDetail$(): Observable<UserDetail | null> {
    return this.loginResponse.asObservable().pipe(
      map((tokenDetail) => tokenDetail as UserDetail | null)
    );
  }

  get userDetailValue(): UserDetail | null {
    return this.loginResponse.value;
  }

  login(loginRequest: LoginRequest): Observable<boolean> {
    return this.httpClientService
      .post<LoginRequest, LoginResponse>(`${this.baseUrl}/admin/login`, loginRequest)
      .pipe(
        map((response: LoginResponse) => {
          this.loginResponse.next(response.token);
          localStorage.setItem('token', JSON.stringify(response.token));
          return true;
        }),
        catchError((error) => {
          return of(false);
        })
      );
  }

  logout(): void {
    this.loginResponse.next(null);
  }

  isAuthenticated(): boolean {
    return this.token !== undefined;
  }

  loadTokenFromStorage(): TokenDetail | null {
    return JSON.parse(localStorage.getItem('token') || 'null');
  }

}
