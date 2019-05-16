import { ActionTypes, ActionsUnion } from '../actions/actions';
import { Student } from '../../common/entities/student';
import { Subject } from '../../common/entities/subject';


export interface IState {
  students: Student[];
  subjects: Subject[];
}

export const initialState: IState = {
  students: [],
  subjects: []
};

export function Reducer(state = initialState, action: ActionsUnion): IState {
  switch (action.type) {

    case ActionTypes.AddStudent: {
      const newState = {...state};
      const newStudent = new Student(
        action.payload.name,
        action.payload.surname,
        action.payload.address,
        action.payload.description
      );
      newState.students.push(newStudent);
      return newState;
    }

    case ActionTypes.AddSubject: {
      const newState = {...state};
      const newSubject = new Subject(
        action.payload.name,
        action.payload.teacher,
        action.payload.room,
        action.payload.description
      );
      newState.subjects.push(newSubject);
      return newState;
    }

    case ActionTypes.LoadSuccess: {
      return action.payload;
    }

    default:
      return state;
  }
}
