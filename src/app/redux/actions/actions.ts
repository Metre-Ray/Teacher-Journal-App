import { Action } from '@ngrx/store';
import { IData } from 'src/app/common/entities/data';
import { Student } from 'src/app/common/entities/student';
import { IState } from '../state';

export enum ActionTypes {
  AddStudent = '[StudentForm Component] AddStudent',
  DeleteStudent = '[StudentPage Component] DeleteStudent',
  AddSubject = '[SubjectForm Component] AddSubject',
  DeleteSubject = '[SubjectListPage Component] DeleteSubject',
  ChangeSubject = '[SubjectListPage Component] ChangeSubject',
  AddSubjectDate = '[SubjectMarksPage Component] AddSubjectDate',
  AddMarks = '[SubjectMarksPage Component] AddrMarks',
  DeleteDate = '[SubjectMarksPage Component] DeleteDate',
  LoadDataRequest = 'Load Data',
  LoadDataSuccess = 'Data Loaded Success',
  LoadDataFailed = 'Data Loaded Failed',
  SaveData = 'Save Data',
  SaveDataSuccess = 'Data successfully saved',
  SaveDataFailed = 'Data save failed',
}

export class AddStudent implements Action {
  public readonly type: ActionTypes.AddStudent = ActionTypes.AddStudent;

  constructor(public payload: {
    name: string,
    lastName: string,
    address: string,
    description: string
  }) {}
}

export class DeleteStudent implements Action {
  public readonly type: ActionTypes.DeleteStudent = ActionTypes.DeleteStudent;

  constructor(public payload: Student) {}
}

export class DeleteSubject implements Action {
  public readonly type: ActionTypes.DeleteSubject = ActionTypes.DeleteSubject;

  constructor(public payload: string) {}
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

export class AddMarks implements Action {
  public readonly type: ActionTypes.AddMarks = ActionTypes.AddMarks;

  constructor(public payload: {subject: string, values: object}) {}
}

export class DeleteDate implements Action {
  public readonly type: ActionTypes.DeleteDate = ActionTypes.DeleteDate;

  constructor(public payload: {subject: string, date: string}) {}
}

export class LoadDataRequest implements Action {
  public readonly type: ActionTypes.LoadDataRequest = ActionTypes.LoadDataRequest;
}

export class LoadDataSuccess implements Action {
  public readonly type: ActionTypes.LoadDataSuccess = ActionTypes.LoadDataSuccess;

  constructor(public payload: IData) {}
}

export class LoadDataFailed implements Action {
  public readonly type: ActionTypes.LoadDataFailed = ActionTypes.LoadDataFailed;
}

export class SaveData implements Action {
  public readonly type: ActionTypes.SaveData = ActionTypes.SaveData;

  constructor(public payload: IState) {}
}

export class SaveDataSuccess implements Action {
  public readonly type: ActionTypes.SaveDataSuccess = ActionTypes.SaveDataSuccess;
}

export class SaveDataFailed implements Action {
  public readonly type: ActionTypes.SaveDataFailed = ActionTypes.SaveDataFailed;
}

export type ActionsUnion = AddStudent | AddSubject | AddSubjectDate | AddMarks | DeleteSubject | DeleteDate |
  LoadDataRequest | LoadDataSuccess | LoadDataFailed | DeleteStudent | SaveData | SaveDataSuccess | SaveDataFailed;
