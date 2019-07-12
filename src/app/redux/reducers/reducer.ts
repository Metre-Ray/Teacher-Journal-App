import { ActionTypes, ActionsUnion } from '../actions/actions';
import { Student } from '../../common/entities/student';
import { Subject } from '../../common/entities/subject';
import { cloneObject } from 'src/app/common/helpers/deepCopy';
import { IState, initialState } from '../state';
import { genId } from 'src/app/common/helpers/generateid';
import { convertStudentDataToObjects, convertSubjectDataToObjects } from 'src/app/common/helpers/converters';
import { IMark } from 'src/app/common/entities/mark';

export function Reducer(state: IState = initialState, action: ActionsUnion): IState {
  switch (action.type) {

    case ActionTypes.AddStudent: {
      const newState: IState = cloneObject(state) as IState;
      if (newState.students.find(student => student.name === action.payload.name && student.lastName === action.payload.lastName)) {
        return newState;
      }
      const newStudent: Student = new Student(
        {
          ...action.payload,
          id: genId(),
          marks: {}
        }
      );
      newState.students.push(newStudent);
      return newState;
    }

    case ActionTypes.AddSubject: {
      const newState: IState = cloneObject(state) as IState;
      if (newState.subjects.find(subject => subject.name === action.payload.name)) {
        return newState;
      }
      const newSubject: Subject = new Subject(
        {
          ...action.payload,
          id: genId(),
          dates: []
        }
      );
      newState.subjects.push(newSubject);
      newState.students.forEach((student) => {
        student.marks[action.payload.name] = {};
      });
      return newState;
    }

    case ActionTypes.AddSubjectDate: {
      const newState: IState = cloneObject(state) as IState;
      const subject: Subject = newState.subjects.find((el) => el.name === action.payload.subject);
      if (subject && subject.dates) { subject.dates.push(action.payload.date); }
      return newState;
    }

    case ActionTypes.AddMarks: {
      const newState: IState = cloneObject(state) as IState;
      const values: object = action.payload.values;
      if (!action.payload.subject || Object.keys(values).length === 0) { return newState; }
      for (const id of Object.keys(values)) {
        const marks: IMark = newState.students.find((student) => student.id === id).marks;
        if (!marks[action.payload.subject]) { marks[action.payload.subject] = {}; }
        values[id].forEach((value) => {
          marks[action.payload.subject][value[0]] = value[1];
        });
      }
      return newState;
    }

    case ActionTypes.DeleteStudent: {
      const newState: IState = cloneObject(state) as IState;
      const indexOfRemovedStudent: number = state.students.indexOf(action.payload);
      if (indexOfRemovedStudent >= 0) { newState.students.splice(indexOfRemovedStudent, 1); }
      return newState;
    }

    case ActionTypes.DeleteSubject: {
      const newState: IState = cloneObject(state) as IState;
      const indexOfRemovedSubject: number = state.subjects.findIndex((subject) => subject.name === action.payload);
      if (indexOfRemovedSubject >= 0) { newState.subjects.splice(indexOfRemovedSubject, 1); }
      return newState;
    }

    case ActionTypes.DeleteDate: {
      const newState: IState = cloneObject(state) as IState;
      const subject: Subject = newState.subjects.find((subj) => subj.name === action.payload.subject);
      if (!subject) {
        return newState;
      }
      const index: number = subject.dates.indexOf(action.payload.date);
      if (index === -1) {
        return newState;
      }
      subject.dates.splice(index, 1);
      newState.students.forEach((student) => {
        if (student.marks[action.payload.subject]) {
          delete student.marks[action.payload.subject][action.payload.date];
        }
      });
      return newState;
    }

    case ActionTypes.LoadDataSuccess: {
      const newState: IState = {
        students: convertStudentDataToObjects(action.payload.students),
        subjects: convertSubjectDataToObjects(action.payload.subjects)
      };
      return newState;
    }

    default:
      return state;
  }
}
