import {createAction, props} from '@ngrx/store';
import {Question} from "../../../models/question.model";

export const getQuestions = createAction(
  '[Questions] Get Questions');

export const createQuestion = createAction(
  '[Questions] Create Question',
  props<{ question: Question }>());

export const editQuestion = createAction(
  '[Questions] Edit Question',
  props<{ question: Question }>());

export const deleteQuestion = createAction(
  '[Questions] Delete Question',
  props<{ question: Question }>());

export const setCurrentQuestion = createAction(
  '[Questions] Set Current Question',
  props<{ question: Question }>());

export const setAnswerQuestion = createAction(
  '[Questions] Set Answer Question',
  props<{ answerQuestion: Question }>());
