import { Injectable } from '@angular/core';
import { HttpclientService } from 'src/app/shared/services/httpclient.service';
import { environment } from 'src/environments/environment';
import { Treatment } from '../models/treatment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {

  constructor(private httpClientService: HttpclientService) { }
  baseUrl = environment.apiUrl;

  getTreatments(id: string): Observable<Treatment[]> {
    const url = `${this.baseUrl}/treatmentbyhopital/${id}`
    return this.httpClientService.get<Treatment[]>(url);
  }

  addTreatment(hopitalId: string,treatment: Treatment): Observable<Treatment> {
    const url = `${this.baseUrl}/treatmentbyhopital/${hopitalId}`
    return this.httpClientService.post<Treatment,any>(url, treatment);
  }
}
