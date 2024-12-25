import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../Entity/user';
import { HotelOffer } from '../Entity/HotelOffer';
import { Reservation } from '../Entity/Reservation';

@Injectable({
  providedIn: 'root',
})
export class MyserviceService {
  constructor(private http: HttpClient) {}

  Auth(data: User): Observable<User> {
    return this.http.post<User>('http://localhost:9000/offers/Auth', data);
  }

  getAllHotelOffers(): Observable<HotelOffer[]> {
    return this.http.get<HotelOffer[]>(
      'http://localhost:9000/offers/getAllHotelOffers'
    );
  }
  getHotelOfferById(id: number): Observable<HotelOffer> {
    return this.http.get<HotelOffer>(
      `http://localhost:9000/offers/getHotelOfferById/${id}`
    );
  }
  createHotelOffer(data: HotelOffer): Observable<HotelOffer> {
    return this.http.post<HotelOffer>(
      'http://localhost:9000/offers/createHotelOffer',
      data
    );
  }
  updateHotelOffer(data: HotelOffer): Observable<HotelOffer> {
    return this.http.put<HotelOffer>(
      'http://localhost:9000/offers/updateHotelOffer',
      data
    );
  }
  deleteHotelOffer(id: number) {
    return this.http.delete(
      `http://localhost:9000/offers/deleteHotelOffer/${id}`
    );
  }
  uploadImage(formData: FormData): Observable<{ filePath: string }> {
    return this.http.post<{ filePath: string }>(
      'http://localhost:9000/offers/uploadImage',
      formData
    );
  }
  GetAllResrvations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(
      'http://localhost:9000/offers/GetAllResrvations'
    );
  }

  UpdateReservation(data: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(
      'http://localhost:9000/offers/UpdateReservation',
      data
    );
  }

  CountReservationsbyStatus():Observable<any>{
    return this.http.get<any>(
      'http://localhost:9000/offers/CountReservationsbyStatus'
    );
  }

  CountReservationsbyByMonths(m:number):Observable<any>{
    return this.http.get<any>(
      `http://localhost:9000/offers/CountReservationsbyByMonths/${m}`
    );
  }
  deleteReservation(id:number):Observable<any>{
    return this.http.delete<any>(
      `http://localhost:9000/offers/deleteReservation/${id}`
    );}

}
