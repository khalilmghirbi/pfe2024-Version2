import { Injectable } from '@angular/core';
import { HttpclientService } from 'src/app/shared/services/httpclient.service';
import { environment } from 'src/environments/environment';
import { Doctor } from '../models/doctor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  constructor(private httpClientService: HttpclientService) { }
  baseUrl = environment.apiUrl;

  getDoctors(hopitalId: string): Observable<Doctor[]> {
    const url = `${this.baseUrl}/doctorbyhopital/${hopitalId}`
    return this.httpClientService.get<Doctor[]>(url);
  }

  updateDoctor(id: string, doctor: Doctor): Observable<Doctor> {
    const url = `${this.baseUrl}/docteur/${id}`
    return this.httpClientService.put<Doctor,any>(url, doctor);
  }

  deleteDoctor(id: string): Observable<Doctor> {
    const url = `${this.baseUrl}/docteur/${id}`
    return this.httpClientService.delete<Doctor>(url);
  }

  addDoctor(id: string, doctor: Doctor): Observable<Doctor> {
    const url = `${this.baseUrl}/createdocteur/${id}`
    return this.httpClientService.post<Doctor, any>(url, doctor);
  }
}
