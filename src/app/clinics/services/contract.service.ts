import { Injectable } from '@angular/core';
import { HttpclientService } from 'src/app/shared/services/httpclient.service';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  constructor(private httpClientService: HttpclientService) { }
  baseUrl = environment.apiUrl;

  getContacts(hopitalId: string): Observable<Contact[]> {
    const url = `${this.baseUrl}/contactbyhopital/${hopitalId}`
    return this.httpClientService.get<Contact[]>(url);
  }

  updateContact(id: string, contact: Contact): Observable<Contact> {
    const url = `${this.baseUrl}/contact/${id}`
    return this.httpClientService.put<Contact,any>(url, contact);
  }

  deleteContact(id: string): Observable<Contact> {
    const url = `${this.baseUrl}/contact/${id}`
    return this.httpClientService.delete<Contact>(url);
  }

  addContact(id: string, contact: Contact): Observable<Contact> {
    const url = `${this.baseUrl}/createcontact/${id}`
    return this.httpClientService.post<Contact, any>(url, contact);
  }
}
