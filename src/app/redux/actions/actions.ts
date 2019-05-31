import { Action } from '@ngrx/store';
import { IState } from '../reducers/reducer';

export enum ActionTypes {
  AddStudent = '[StudentForm Component] AddStudent',
  DeleteStudent = '[StudentPage Component] DeleteStudent',
  AddSubject = '[SubjectForm Component] AddSubject',
  DeleteSubject = '[SubjectListPage Component] DeleteSubject',
  ChangeSubject = '[SubjectListPage Component] ChangeSubject',
  AddSubjectDate = '[SubjectMarksPage Component] AddSubjectDate',
  AddDateOrMarks = '[SubjectMarksPage Component] AddDateOrMarks',
  LoadData = 'Load Data',
  LoadSuccess = 'Data Loaded Success',
  LoadFailed = 'Data Loaded Failed'
}


export class AddStudent implements Action {
  readonly type = ActionTypes.AddStudent;

  constructor(public payload: {
    name: string,
    surname: string,
    address: string,
    description: string
  }) {}
}

export class DeleteStudent implements Action {
  readonly type = ActionTypes.DeleteStudent;
}

export class AddSubject implements Action {
  readonly type = ActionTypes.AddSubject;

  constructor(public payload: {
    name: string,
    teacher: string,
    room: number,
    description: string
  }) {}
}

export class AddSubjectDate implements Action {
  readonly type = ActionTypes.AddSubjectDate;

  constructor(public payload: {subject: string, date: string}) {}
}

export class AddDateOrMarks implements Action {
  readonly type = ActionTypes.AddDateOrMarks;

  constructor(public payload: {subject: string, values: object}) {}
}

export class LoadData implements Action {
  readonly type = ActionTypes.LoadData;
}

export class LoadSuccess implements Action {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public payload: IState) {}
}

export type ActionsUnion = AddStudent | AddSubject | AddSubjectDate | AddDateOrMarks | LoadData | LoadSuccess;
