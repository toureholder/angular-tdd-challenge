import { Observable, throwError } from 'rxjs';

export abstract class BaseService {


  handleError(error: any): Observable<any> {
    return throwError(error);
  }

}
