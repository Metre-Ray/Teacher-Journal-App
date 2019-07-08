import { IState } from '../state';
import { createSelector, MemoizedSelector } from '@ngrx/store';
import { State } from '../reducers';
import { Student } from 'src/app/common/entities/student';
import { Subject } from 'src/app/common/entities/subject';

const selectData: (state: State) => IState = (state: State) => state.data;

export const selectAllData: MemoizedSelector<State, IState> = createSelector(
  selectData,
  (state: IState) => state
);

export const selectStudents: MemoizedSelector<State, Student[]> = createSelector(
  selectData,
  (state: IState) => state.students
);

export const selectSubjects: MemoizedSelector<State, Subject[]> = createSelector(
  selectData,
  (state: IState) => state.subjects
);
