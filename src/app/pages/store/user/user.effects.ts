import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {combineLatest, EMPTY, switchMap, tap} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {Store} from "@ngrx/store";
import {selectQuestions} from "../questions/questions.selectors";
import {getUserQuestions} from "./user.actions";
import {RootState} from "../../../store/root-store";
import {getQuestions} from "../questions/qustions.actions";
import {selectUserId} from "./user.selectors";

@Injectable()
export class UserEffects {

  getUserQuestions$ = createEffect(() => this.actions$.pipe(
      ofType(getQuestions),
      switchMap(() => combineLatest([
          this.store.select(selectQuestions),
          this.store.select(selectUserId)
        ])
        .pipe(
          map(([questions,userId]) => {
            const userQuestions = questions.filter(question => question.userId === userId)
            const answered = userQuestions.filter(el => el.isAnswered === true )
            const unAnswered = userQuestions.filter(el => el.isAnswered === false )
            return getUserQuestions({unAnswered: unAnswered, answered: answered})
          }),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<RootState>
  ) {}
}
