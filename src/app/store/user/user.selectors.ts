import { createSelector } from '@ngrx/store';
import {Question} from "../../../models/question.model";
import {AppState} from "../../../models/store.models";

export interface UserState {
  questions: Question[];
  userId: number
}

export const selectFeature = (state: AppState) => state.user;

export const selectFeatureQuestions = createSelector(
  selectFeature,
  (state: UserState) => state.questions
);
