import { Student } from '../common/entities/student';
import { Subject } from '../common/entities/subject';

export interface IState {
  students: Student[];
  subjects: Subject[];
}

export const initialState: IState = {
  students: [],
  subjects: []
};
