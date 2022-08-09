import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";

import {getQuestions} from "./pages/store/questions/qustions.actions";
import {QuestionsState} from "./pages/store/questions/questions.reducer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'Questionaire';

  constructor(private store: Store<QuestionsState>) {
  }

  ngOnInit() {
    this.store.dispatch(getQuestions());
  }
}
