import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IOurData } from '../entities/data';

@Injectable({
  providedIn: 'root'
})
export class RequestDataFromServerService {

  constructor(private http: HttpClient) { }

  public getMockData(): Observable<IOurData> {
    return this.http.get<IOurData>('./assets/data.json').pipe(
      catchError(err => {
        return of({ students: [], subjects: [] });
      })
    );
  }
}
