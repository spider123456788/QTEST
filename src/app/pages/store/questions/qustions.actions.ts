import { createAction } from '@ngrx/store';

export const getQuestions = createAction('[Questions Page] Get Questions');
export const createQuestion = createAction('[Create Question] Create Question');
export const editQuestion = createAction('[Edit Question] Edit Question');

