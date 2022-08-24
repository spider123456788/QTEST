import { createSelector } from '@ngrx/store';
import {UserState} from "./user.reducer";
import {RootState} from "../../../store/root-store";

export const selectFeature = (state: RootState) => state.user;

export const selectUserId = createSelector(
  selectFeature,
  (state: UserState) => state.userId
);
export const selectAnsweredQuestions = createSelector(
  selectFeature,
  (state: UserState) => state.userAnsweredQuestions
);
export const selectUnansweredQuestions = createSelector(
  selectFeature,
  (state: UserState) => state.userUnansweredQuestions
);

