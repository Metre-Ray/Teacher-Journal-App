import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IData } from '../entities/data';

const LINK: string = './assets/data.json';

@Injectable({
  providedIn: 'root'
})
export class RequestDataFromServerService {

  constructor(private http: HttpClient) { }

  public getMockData(): Observable<IData> {
    return this.http.get<IData>(LINK).pipe(
      catchError(err => {
        return of({ students: [], subjects: [] });
      })
    );
  }
}
