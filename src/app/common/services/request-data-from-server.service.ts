import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestDataFromServerService {

  constructor(private http: HttpClient) { }

  getMockData(): Observable<any> {
    return this.http.get('./assets/data.json').pipe(
      catchError(err => {
        console.log('Erorr in http request: ', err);
        return of({});
      })
    );
  }
}
