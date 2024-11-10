import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, NEVER, Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class HttpclientService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private dialog: MatDialog
  ) {}

  getAuthHeaders(): HttpHeaders {
    const token: string = this.authService.accessToken;
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  get<Touput>(url: string, params?: HttpParams): Observable<Touput> {
    const headers: HttpHeaders = this.getAuthHeaders();
    return this.httpClient.get<Touput>(url, { params, headers }).pipe(
      catchError((error: Error) => {
        this.openErrorDialog(error);
        return NEVER;
      })
    );
  }

  post<Tinput, Touput>(url: string, body: Tinput): Observable<Touput> {
    const headers: HttpHeaders = this.getAuthHeaders();
    return this.httpClient.post<Touput>(url, body, { headers }).pipe(
      catchError((error: Error) => {
        this.openErrorDialog(error);
        return NEVER;
      })
    );
  }

  put<Tinput, Touput>(url: string, body: Tinput): Observable<Touput> {
    const headers: HttpHeaders = this.getAuthHeaders();
    return this.httpClient.put<Touput>(url, body, { headers }).pipe(
      catchError((error: Error) => {
        this.openErrorDialog(error);
        return NEVER;
      })
    );
  }

  delete<Tinput>(url: string, params: HttpParams): Observable<Tinput> {
    const headers: HttpHeaders = this.getAuthHeaders();
    return this.httpClient.delete<Tinput>(url, { headers, params });
  }

  openErrorDialog(error: Error) {
    const dialogConfig = {
      minWidth: '300px', // Set minimum width
      width: '50vw', // Set width to 80% of the viewport width
      maxWidth: '600px', // Set maximum width
      data: error,
    };
    this.dialog.open(ErrorDialogComponent, dialogConfig);
  }
}
