import { Observable, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

export abstract class BaseService {

  protected getAuthHeaderJson() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Basic #ASDFGW#ERWQERTRYT#%$%$@#$%==`
      })
    };
  }

  handleError(error: any): Observable<any> {
    return throwError(error);
  }

}
