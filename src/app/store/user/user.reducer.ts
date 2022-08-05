import { on } from '@ngrx/store';
import * as UserActions from './user.actions';
import {createRehydrateReducer} from "../index";
import {Question} from "../../../models/question.model";

export enum USER_STATE {
  USER_STATE_KEY = 'user'
}

export interface UserState {
  questions: Question[]
  userId: number
}

export const initialState: UserState = {
  questions: [],
  userId: 1,
};
export const userReducer = createRehydrateReducer(
  USER_STATE.USER_STATE_KEY,
  initialState,
  on(UserActions.getUser, state =>  ({...state, questions: [
      {
        title: 'Simple Question',
        type: '',
        isAnswered: false,
        fields: [],
        userId: 1
      },
      {
        title: 'Simple Question',
        type: '',
        isAnswered: false,
        fields: [],
        userId: 1
      },
      {
        title: 'Simple Question',
        type: '',
        isAnswered: false,
        fields: [],
        userId: 1
      },
      {
        title: 'Simple Question',
        type: '',
        isAnswered: false,
        fields: [],
        userId: 1
      },
      {
        title: 'Simple Question',
        type: '',
        isAnswered: false,
        fields: [],
        userId: 1
      },
      {
        title: 'Simple Question',
        type: '',
        isAnswered: false,
        fields: [],
        userId: 1
      }
    ]})),
);
