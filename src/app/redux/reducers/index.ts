import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';

import { Reducer } from './reducer';
import { IState } from '../state';


export interface State {
  data: IState;
}

export const reducers: ActionReducerMap<State> = {
  data: Reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
