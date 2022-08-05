import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {Question} from "../../../models/question.model";
import {selectFeatureQuestions} from "../../store/user/user.selectors";
import {AppState} from "../../../models/store.models";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.sass']
})
export class QuestionsComponent implements OnInit {
  questions$: Observable<Question[]> = this._store.select(selectFeatureQuestions)
  constructor(private _store: Store<AppState>) {

  }

  ngOnInit(): void {

  }

}
