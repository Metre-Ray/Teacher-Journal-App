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

    // case ActionTypes.AddStudent:
    //   const newState: IState = JSON.parse(JSON.stringify(state));
    //   newState.students.push({
    //     Id: 'TODO',
    //     Index: newState.students.length,
    //     Name: action.payload.name,
    //     'Last name': action.payload.surname,
    //     Address: action.payload.address,
    //     Description: action.payload.description,
    //     Marks: {}
    //   });
    //   return newState;

    // case ActionTypes.AddSubject:
    //   return {
    //     ...state
    //   };

    // case ActionTypes.DeleteStudent:
    //   return {
    //     ...state
    //   };

    case ActionTypes.LoadSuccess: {
      return action.payload;
    }

    default:
      return state;
  }
}
