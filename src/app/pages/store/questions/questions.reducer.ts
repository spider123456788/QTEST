import {createRehydrateReducer} from "../index";
import {Question} from "../../../models/question.model";
import * as fromActions from './qustions.actions'
import {on} from "@ngrx/store";
export const QUESTION_STATE_KEY = 'questions';


export interface QuestionsState {
  allQuestions: Question[],
  currentQuestion: Question | null
}

export const initialState: QuestionsState = {
  allQuestions: [],
  currentQuestion: null
};
export const questionsReducer = createRehydrateReducer(
  QUESTION_STATE_KEY,
  initialState,
  on(fromActions.getQuestions, (state) =>
    ({
      ...state,
      allQuestions: [{
        title: 'Simple Question',
        type: '',
        isAnswered: false,
        fields: [],
        userId: 1
      },
        {
          title: 'Simple Question',
          type: '',
          isAnswered: false,
          fields: [],
          userId: 1
        },
        {
          title: 'Simple Question',
          type: '',
          isAnswered: false,
          fields: [],
          userId: 1
        },
        {
          title: 'Simple Question',
          type: '',
          isAnswered: false,
          fields: [],
          userId: 1
        },
        {
          title: 'Simple Question',
          type: '',
          isAnswered: false,
          fields: [],
          userId: 1
        },
        {
          title: 'Simple Question',
          type: '',
          isAnswered: false,
          fields: [],
          userId: 1
        }]
    })),
  on(fromActions.createQuestion, (state, {question}) => ({
      ...state,
      allQuestions: [...state.allQuestions, question]
  })),
  on(fromActions.editQuestion, (state, {question}) => ({
    ...state,
    allQuestions: state.allQuestions.map((item) => {
      if(item.title === question.title) {
        item = question
      }
      return item
    })
  })),
  on(fromActions.deleteQuestion, (state, {question}) => ({
    ...state,
    allQuestions: state.allQuestions.filter( item => item.title !== question.title)
  })),
  on(fromActions.setCurrentQuestion, (state, {question}) => ({
    ...state,
    currentQuestion: question
  }))

);
