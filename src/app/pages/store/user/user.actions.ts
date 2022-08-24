import {createAction, props} from '@ngrx/store';
import {Question} from "../../../models/question.model";

export const getUserQuestions = createAction(
  '[User] Get User Questions',
  props<{answered: Question[], unAnswered: Question[]}>()
);
