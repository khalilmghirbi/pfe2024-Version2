import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpclientService } from 'src/app/shared/services/httpclient.service';
import { environment } from 'src/environments/environment';
import { Media } from '../models/media';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private httpClientService: HttpclientService) { }
  baseUrl = environment.apiUrl;

  getMedias(id: string): Observable<Media[]> {
    const url = `${this.baseUrl}/mediabyhopital/${id}`
    return this.httpClientService.get<Media[]>(url);
  }

  deleteMedia(id: string): Observable<Media> {
    const url = `${this.baseUrl}/photos/${id}`
    return this.httpClientService.delete<Media>(url);
  }

  addMedia(hopitalId: string, media: Media): Observable<Media> {
    const url = `${this.baseUrl}/addphoto/${hopitalId}`
    return this.httpClientService.post<Media, any>(url, media);
  }
}
