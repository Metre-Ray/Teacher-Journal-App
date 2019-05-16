import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import { Reducer } from './reducer';
import { IState } from '../reducers/reducer';


export interface State {
  data: IState;
}

export const reducers: ActionReducerMap<State> = {
  data: Reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
