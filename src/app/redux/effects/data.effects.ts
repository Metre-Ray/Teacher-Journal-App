import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { RequestDataFromServerService } from 'src/app/common/services/request-data-from-server.service';
import { ActionTypes, LoadDataSuccess, ActionsUnion, LoadDataFailed } from '../actions/actions';
import { IData } from 'src/app/common/entities/data';

@Injectable()
export class DataEffects {

  @Effect()
  public loadData$: Observable<ActionsUnion> = this.actions$
    .pipe(
      ofType(ActionTypes.LoadDataRequest),
      switchMap((action) => this.dataService
        .getMockData()
          .pipe(
            map(data => {
              return new LoadDataSuccess((data as IData));
            }),
            catchError(() => {
              return of(new LoadDataFailed());
            })
          )
      )
    );

  constructor(
    private actions$: Actions,
    private dataService: RequestDataFromServerService
  ) {}
}
