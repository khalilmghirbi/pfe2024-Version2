import { Injectable } from '@angular/core';
import { HttpclientService } from 'src/app/shared/services/httpclient.service';
import { environment } from 'src/environments/environment';
import { CaseManager } from '../models/case-manager';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  constructor(private httpClientService: HttpclientService) { }
  baseUrl = environment.apiUrl;

  getCaseManagers(hopitalId: string): Observable<CaseManager[]> {
    const url = `${this.baseUrl}/managerbyhopital/${hopitalId}`
    return this.httpClientService.get<CaseManager[]>(url);
  }

  updateCaseManager(id: string, hotel: CaseManager): Observable<CaseManager> {
    const url = `${this.baseUrl}/managerUsupdate/${id}`
    return this.httpClientService.put<CaseManager,any>(url, hotel);
  }

  deleteCaseManager(id: string): Observable<CaseManager> {
    const url = `${this.baseUrl}/managerUs/${id}`
    return this.httpClientService.delete<CaseManager>(url);
  }

  addCaseManager(id: string, hotel: CaseManager): Observable<CaseManager> {
    const url = `${this.baseUrl}/createmanager/${id}`
    return this.httpClientService.post<CaseManager, any>(url, hotel);
  }
}
