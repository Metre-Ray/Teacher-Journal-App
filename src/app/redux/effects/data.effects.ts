import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { RequestDataFromServerService } from 'src/app/common/services/request-data-from-server.service';
import { ActionTypes, LoadSuccess } from '../actions/actions';

@Injectable()
export class DataEffects {

  @Effect()
  loadData$ = this.actions$
    .pipe(
      ofType(ActionTypes.LoadData),
      mergeMap((action) => this.dataService
        .getMockData()
        .pipe(
          map(data => {
            return new LoadSuccess(data);
          }),
          catchError(() => {
            return EMPTY;
          })
        ))
      );

  constructor(
    private actions$: Actions,
    private dataService: RequestDataFromServerService
  ) {}
}
