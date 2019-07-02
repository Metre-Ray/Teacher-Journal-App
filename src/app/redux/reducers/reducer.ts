import { ActionTypes, ActionsUnion } from '../actions/actions';
import { Student } from '../../common/entities/student';
import { Subject } from '../../common/entities/subject';
import { cloneObject } from 'src/app/common/helpers/deepCopy';
import { IState, initialState } from '../state';
import { genId } from 'src/app/common/helpers/generateid';
import { convertStudentDataToObjects, convertSubjectDataToObjects } from 'src/app/common/helpers/converters';

export function Reducer(state: IState = initialState, action: ActionsUnion): IState {
  switch (action.type) {

    case ActionTypes.AddStudent: {
      const newState: IState = cloneObject(state) as IState;
      if (newState.students.find(student => student.name === action.payload.name && student.lastName === action.payload.surname)) {
        return newState;
      }
      const newStudent: Student = new Student(
        {
          id: genId(),
          name: action.payload.name,
          lastName: action.payload.surname,
          address: action.payload.address,
          description: action.payload.description,
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
          id: genId(),
          name: action.payload.name,
          teacher: action.payload.teacher,
          room: action.payload.room,
          description: action.payload.description,
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

    case ActionTypes.AddDateOrMarks: {
      const newState: IState = cloneObject(state) as IState;
      const values: object = action.payload.values;
      if (!action.payload.subject || Object.keys(values).length === 0) { return newState; }
      try {
        for (const id of Object.keys(values)) {
          const marks: object = newState.students.find((el) => el.id === id).marks;
          if (marks[action.payload.subject] === undefined) { marks[action.payload.subject] = {}; }
          values[id].forEach((value) => {
            if (value[1] === '') {
              delete marks[action.payload.subject][value[0]];
            } else {
              marks[action.payload.subject][value[0]] = value[1];
            }
          });
        }
      } catch {
        console.log('Error in AddDateOrMarks!');
        return newState;
      }
      return newState;
    }

    case ActionTypes.DeleteStudent: {
      const newState: IState = cloneObject(state) as IState;
      const indexOfRemovedStudent: number = state.students.indexOf(action.payload);
      if (indexOfRemovedStudent >= 0) { newState.students.splice(indexOfRemovedStudent, 1); }
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
