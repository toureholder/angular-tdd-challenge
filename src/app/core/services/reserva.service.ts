import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/shared/models/booking';

@Injectable({
  providedIn: 'root'
})
export class ReservaService extends BaseService {

  apiURL = 'http://localhost/reserva';

  constructor(private http: HttpClient) {
    super();
  }

  send(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(`${this.apiURL}`, booking, this.getAuthHeaderJson())
      .pipe(catchError(this.handleError));
  }

}
