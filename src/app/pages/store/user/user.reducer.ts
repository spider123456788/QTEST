import {createReducer, on} from '@ngrx/store';
import * as UserActions from './user.actions';
import {Question} from "../../../models/question.model";

export enum USER_STATE {
  USER_STATE_KEY = 'user'
}

export interface UserState {
  userId: number
  userAnsweredQuestions: Question[]
  userUnansweredQuestions: Question[]
}

export const initialState: UserState = {
  userId: 1,
  userAnsweredQuestions: [],
  userUnansweredQuestions: []
};
export const userReducer = createReducer(
  initialState,
  on(UserActions.getUserQuestions, (state, {answered, unAnswered}) =>  ({
    ...state,
    userAnsweredQuestions: answered,
    userUnansweredQuestions: unAnswered
  })),
);
