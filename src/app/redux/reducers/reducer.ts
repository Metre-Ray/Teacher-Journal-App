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
      newState.students.forEach((student) => {
        student.Marks[action.payload.name] = {};
      });
      return newState;
    }

    case ActionTypes.AddSubjectDate: {
      const newState = {...state};
      const subject = newState.subjects.find((el) => el.Name === action.payload.subject);
      if (subject && subject.Dates) { subject.Dates.push(action.payload.date); }
      return newState;
    }

    case ActionTypes.AddDateOrMarks: {
      const newState = {...state};
      const values = action.payload.values;
      if (!action.payload.subject || Object.keys(values).length === 0) { console.log('gere'); return newState; }
      try {
        for (const ind of Object.keys(values)) {
          newState.students.find((el) => el.Id === ind).Marks[action.payload.subject][values[ind][0]] = values[ind][1];
        }
      } catch {
        console.log('Error in AddDateOrMarks!');
        return newState;
      }
      return newState;
    }

    case ActionTypes.LoadSuccess: {
      return action.payload;
    }

    default:
      return state;
  }
}
