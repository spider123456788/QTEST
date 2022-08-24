import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import { Observable } from "rxjs";
import {Question} from "../../models/question.model";
import {selectQuestions} from "../store/questions/questions.selectors";
import {RootState} from "../../store/root-store";
import {Router} from "@angular/router";
import {query} from "@angular/animations";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.sass']
})
export class QuestionsComponent implements OnInit {
  questions$: Observable<Question[]> = this._store.select(selectQuestions)

  constructor(private _store: Store<RootState>,
              private router: Router
              ) {
  }
  ngOnInit(): void {
    console.log('there')
  }

  answer(question: Question) {
    console.log(question)
    this.router.navigate([`/questions/${question.title}`])
  }
}
