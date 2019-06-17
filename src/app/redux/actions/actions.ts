import { Action } from '@ngrx/store';
import { IOurData } from 'src/app/common/entities/data';

export enum ActionTypes {
  AddStudent = '[StudentForm Component] AddStudent',
  DeleteStudent = '[StudentPage Component] DeleteStudent',
  AddSubject = '[SubjectForm Component] AddSubject',
  DeleteSubject = '[SubjectListPage Component] DeleteSubject',
  ChangeSubject = '[SubjectListPage Component] ChangeSubject',
  AddSubjectDate = '[SubjectMarksPage Component] AddSubjectDate',
  AddDateOrMarks = '[SubjectMarksPage Component] AddDateOrMarks',
  LoadDataRequest = 'Load Data',
  LoadDataSuccess = 'Data Loaded Success',
  LoadDataFailed = 'Data Loaded Failed'
}

export class AddStudent implements Action {
  public readonly type: ActionTypes.AddStudent = ActionTypes.AddStudent;

  constructor(public payload: {
    name: string,
    surname: string,
    address: string,
    description: string
  }) {}
}

export class DeleteStudent implements Action {
  public readonly type: ActionTypes.DeleteStudent = ActionTypes.DeleteStudent;
}

export class AddSubject implements Action {
  public readonly type: ActionTypes.AddSubject = ActionTypes.AddSubject;

  constructor(public payload: {
    name: string,
    teacher: string,
    room: string,
    description: string
  }) {}
}

export class AddSubjectDate implements Action {
  public readonly type: ActionTypes.AddSubjectDate = ActionTypes.AddSubjectDate;

  constructor(public payload: {subject: string, date: string}) {}
}

export class AddDateOrMarks implements Action {
  public readonly type: ActionTypes.AddDateOrMarks = ActionTypes.AddDateOrMarks;

  constructor(public payload: {subject: string, values: object}) {}
}

export class LoadDataRequest implements Action {
  public readonly type: ActionTypes.LoadDataRequest = ActionTypes.LoadDataRequest;
}

export class LoadDataSuccess implements Action {
  public readonly type: ActionTypes.LoadDataSuccess = ActionTypes.LoadDataSuccess;

  constructor(public payload: IOurData) {}
}

export class LoadDataFailed implements Action {
  public readonly type: ActionTypes.LoadDataFailed = ActionTypes.LoadDataFailed;
}

export type ActionsUnion = AddStudent | AddSubject | AddSubjectDate | AddDateOrMarks | LoadDataRequest | LoadDataSuccess | LoadDataFailed;
