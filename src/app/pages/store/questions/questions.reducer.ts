import {Question} from "../../../models/question.model";
import * as fromActions from './qustions.actions'
import {createReducer, on} from "@ngrx/store";
export const QUESTION_STATE_KEY = 'questions';


export interface QuestionsState {
  allQuestions: Question[],
  currentQuestion: Question | null
}

export const initialState: QuestionsState = {
  allQuestions: [],
  currentQuestion: null
};
export const questionsReducer = createReducer(
  initialState,
  on(fromActions.getQuestions, (state) =>
    ({
      ...state,
      allQuestions: [
        {
          title: 'Question 1',
          type: 'Single',
          isAnswered: false,
          fields: [
            {
              text: 'Option 1',
              checked: false
            },
            {
              text: 'Option 2',
              checked: false
            },
            {
              text: 'Option 3',
              checked: false
            }
          ],
          createdDate: new Date(),
          userId: 1
        },
        {
          title: 'Question 2',
          type: 'Multi',
          isAnswered: false,
          fields: [
            {
              text: 'Option 1',
              checked: false
            },
            {
              text: 'Option 2',
              checked: false
            },
            {
              text: 'Option 3',
              checked: false
            }
          ],
          createdDate: new Date(),
          userId: 1
        },
        {
          title: 'Simple Question',
          type: 'Open',
          isAnswered: false,
          fields: [],
          createdDate: new Date(),
          userId: 1
        }
      ]
    })),
  on(fromActions.createQuestion, (state, {question}) => {
    console.log(question)
    return {
      ...state,
      allQuestions: [...state.allQuestions, question]
  }}),
  on(fromActions.editQuestion, (state, {question}) => ({
    ...state,
    allQuestions: state.allQuestions.map((item) => {
      console.log(item)
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
  })),
  on(fromActions.setAnswerQuestion, (state, {answerQuestion}) => ({
    ...state,
    allQuestions: state.allQuestions.map( question => {
      if (question.title === answerQuestion.title)
        question = answerQuestion
      return question
    })
  }))

);
