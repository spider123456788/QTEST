import { createSelector } from '@ngrx/store';
import {QuestionsState} from "./questions.reducer";
import {RootState} from "../../../store/root-store";


export const selectFeature = (state: RootState) => state.questions;

export const selectQuestions = createSelector(
  selectFeature,
  (state:QuestionsState) => state.allQuestions
);
export const selectCurrentQuestion = createSelector(
  selectFeature,
  (state:QuestionsState) => state.currentQuestion
);
