import { on } from '@ngrx/store';
import * as UserActions from './user.actions';
import {createRehydrateReducer} from "../index";
import {Question} from "../../../models/question.model";

export enum USER_STATE {
  USER_STATE_KEY = 'user'
}

export interface UserState {
  userQuestions: Question[]
  userId: number
}

export const initialState: UserState = {
  userQuestions: [],
  userId: 1,
};
export const userReducer = createRehydrateReducer(
  USER_STATE.USER_STATE_KEY,
  initialState,
  on(UserActions.getUserQuestions, (state, {questions}) =>  ({
    ...state,
    userQuestions: questions
  })),
);
