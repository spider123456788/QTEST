import { createSelector } from '@ngrx/store';
import {UserState} from "./user.reducer";
import {RootState} from "../../../store/root-store";




export const selectFeature = (state: RootState) => state.user;

export const selectUserQuestions = createSelector(
  selectFeature,
  (state: UserState) => state.userQuestions
);
export const selectUserId = createSelector(
  selectFeature,
  (state: UserState) => state.userId
);

