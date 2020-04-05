import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Address } from 'src/app/shared/models/address';

@Injectable({
  providedIn: 'root'
})
export class CepService extends BaseService  {

  apiURL = 'https://viacep.com.br/ws/';
  typeResponse = '/json/';

  constructor(
    private http: HttpClient
  ) {
    super();
   }

  getAddress(cep: string): Observable<Address> {
    return this.http.get<Address>(this.apiURL + cep + this.typeResponse)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}
