import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, filter, Observable, of } from 'rxjs';
import { HttpclientService } from 'src/app/shared/services/httpclient.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClinicService {
  languages: string[] = ['English', 'Arabe', 'Frensh'];
  specialities: string[] = ['General Medicine', 'Pediatrics', 'Dermatology'];
  clinic: BehaviorSubject<number | null> = new BehaviorSubject<number | null>(
    null
  );
  constructor(private httpClientService: HttpclientService) {}
  baseUrl = environment.apiUrl;

  public get activeClinics$(): Observable<number|null> {
    return this.clinic.asObservable();
  }

  getClinics(userId: number): Observable<{ id: string; name: string }[]> {
    const url = `${this.baseUrl}/clinics/${userId}`;
    return this.httpClientService.get<{ id: string; name: string }[]>(url);
  }

  selectClinic(clinicId: number): void {
    this.clinic.next(clinicId);
  }

  getSpecialitites(): Observable<string[]> {
    const url = `${this.baseUrl}/treatments`;
    return this.httpClientService.get<string[]>(url);
  }

  getLangs(): Observable<string[]> {
    const url = `${this.baseUrl}/languages`;
    return this.httpClientService.get<string[]>(url);  
  }
}
