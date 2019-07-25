import { IMark } from './mark';

export interface IStudentData {
  Id: string;
  Name: string;
  'Last name': string;
  Address: string;
  Description: string;
  Marks: IMark;
}

export interface ISubjectData {
  Id: string;
  Name: string;
  Room: string;
  Teacher: string;
  Description: string;
  Marks: IMark;
  Dates: string[];
}

export interface IData {
  students: IStudentData[];
  subjects: ISubjectData[];
}
