import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpclientService } from 'src/app/shared/services/httpclient.service';
import { environment } from 'src/environments/environment';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClientService: HttpclientService) { }
  baseUrl = environment.apiUrl;

  getProfile(id: string): Observable<Profile> {
    const url = `${this.baseUrl}/profilbyhopital/${id}`
    return this.httpClientService.get<Profile>(url);
  }

  
  updateProfile(profile: Profile): Observable<Profile> {
    const url = `${this.baseUrl}/updateprofile/${profile.id}`
    return this.httpClientService.put<Profile,any>(url, profile);
  }

  
}
