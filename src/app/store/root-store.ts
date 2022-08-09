import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import {userReducer, UserState} from "../pages/store/user/user.reducer";
import {questionsReducer, QuestionsState} from "../pages/store/questions/questions.reducer";
import {RouterStateUrl} from "../models/store.models";

export interface RootState {
  router: RouterReducerState<RouterStateUrl> | null;
  user: UserState ,
  questions: QuestionsState
}

export const rootReducers: ActionReducerMap<RootState> = {
  router: routerReducer,
  user: userReducer,
  questions: questionsReducer
};

export const rootInitialState: RootState = {
  router: null,
  user: {
    userQuestions: [],
    userId: 1
  },
  questions: {
    allQuestions: [],
    currentQuestion: null
  }
};
