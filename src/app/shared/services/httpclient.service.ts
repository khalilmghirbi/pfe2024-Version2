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
    private dialog: MatDialog
  ) {}

  get<Touput>(url: string, params?: HttpParams): Observable<Touput> {
    // const headers: HttpHeaders = this.getAuthHeaders();
    return this.httpClient.get<Touput>(url, { params }).pipe(
      catchError((error: Error) => {
        console.log(error)
        this.openErrorDialog(error);
        return NEVER;
      })
    );
  }

  post<Tinput, Touput>(url: string, body: Tinput): Observable<Touput> {
    return this.httpClient.post<Touput>(url, body).pipe(
      catchError((error: Error) => {
        this.openErrorDialog(error);
        return NEVER;
      })
    );
  }

  put<Tinput, Touput>(url: string, body: Tinput): Observable<Touput> {
    return this.httpClient.put<Touput>(url, body).pipe(
      catchError((error: Error) => {
        this.openErrorDialog(error);
        return NEVER;
      })
    );
  }

  delete<Tinput>(url: string, params?: HttpParams): Observable<Tinput> {
    return this.httpClient.delete<Tinput>(url, { params });
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
