import { ActionTypes, ActionsUnion } from '../actions/actions';
import { Student } from '../../common/entities/student';
import { Subject } from '../../common/entities/subject';
import { cloneObject } from 'src/app/common/helpers/deepCopy';
import { IState, initialState } from '../state';



export function Reducer(state = initialState, action: ActionsUnion): IState {
  switch (action.type) {

    case ActionTypes.AddStudent: {
      const newState = cloneObject(state) as IState;
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
      const newState = cloneObject(state) as IState;
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
      const newState = cloneObject(state) as IState;
      const subject = newState.subjects.find((el) => el.Name === action.payload.subject);
      if (subject && subject.Dates) { subject.Dates.push(action.payload.date); }
      return newState;
    }

    case ActionTypes.AddDateOrMarks: {
      const newState = cloneObject(state) as IState;
      const values = action.payload.values;
      if (!action.payload.subject || Object.keys(values).length === 0) { return newState; }
      try {
        for (const ind of Object.keys(values)) {
          const marks = newState.students.find((el) => el.Id === ind).Marks;
          if (marks[action.payload.subject] === undefined) { marks[action.payload.subject] = {}; }
          marks[action.payload.subject][values[ind][0]] = values[ind][1];
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
