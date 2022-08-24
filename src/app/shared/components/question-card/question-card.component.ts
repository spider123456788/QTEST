import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../../../models/question.model";
import { Router} from "@angular/router";
import {RootState} from "../../../store/root-store";
import {Store} from "@ngrx/store";
import {setCurrentQuestion} from "../../../pages/store/questions/qustions.actions";

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.sass']
})
export class QuestionCardComponent implements OnInit {
  @Input() question!: Question
  @Output() answerQuestion = new EventEmitter<Question>()
  constructor(
    public router: Router,
    private store: Store<RootState>
  ) { }

  ngOnInit(): void {
  }

  questionEdit() {
    this.router.navigate(['/admin/edit']).then(
      () => this.store.dispatch(setCurrentQuestion({question: this.question}))
    )
  }

  answer(question: Question) {
    this.store.dispatch(setCurrentQuestion({question}))
    console.log(question)
    this.answerQuestion.emit(question)
  }
}
