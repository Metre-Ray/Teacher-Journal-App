import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IState } from 'src/app/redux/state';

@Injectable({
  providedIn: 'root'
})
export class RequestDataFromServerService {

  constructor(private http: HttpClient) { }

  getMockData(): Observable<IState> {
    return this.http.get<IState>('./assets/data.json').pipe(
      catchError(err => {
        return of({ students: [], subjects: [] });
      })
    );
  }
}
