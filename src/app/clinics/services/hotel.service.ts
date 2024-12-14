import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpclientService } from 'src/app/shared/services/httpclient.service';
import { environment } from 'src/environments/environment';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private httpClientService: HttpclientService) { }
  baseUrl = environment.apiUrl;

  getHotels(hopitalId: string): Observable<Hotel[]> {
    const url = `${this.baseUrl}/hotelbyhopital/${hopitalId}`
    return this.httpClientService.get<Hotel[]>(url);
  }

  updateHotel(id: string, hotel: Hotel): Observable<Hotel> {
    const url = `${this.baseUrl}/hotel/${id}`
    return this.httpClientService.put<Hotel,any>(url, hotel);
  }

  deleteHotel(id: string): Observable<Hotel> {
    const url = `${this.baseUrl}/hotel/${id}`
    return this.httpClientService.delete<Hotel>(url);
  }

  addHotel(id: string, hotel: Hotel): Observable<Hotel> {
    const url = `${this.baseUrl}/createhotel/${id}`
    return this.httpClientService.post<Hotel, any>(url, hotel);
  }
}
