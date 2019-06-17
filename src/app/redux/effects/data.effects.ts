import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { RequestDataFromServerService } from 'src/app/common/services/request-data-from-server.service';
import { ActionTypes, LoadDataSuccess, ActionsUnion } from '../actions/actions';
import { IOurData } from 'src/app/common/entities/data';

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
              return new LoadDataSuccess((data as IOurData));
            }),
            catchError(() => {
              return EMPTY;
            })
          )
      )
    );

  constructor(
    private actions$: Actions,
    private dataService: RequestDataFromServerService
  ) {}
}
