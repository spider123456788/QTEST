import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../../../models/question.model";
import {ActivatedRoute, Router} from "@angular/router";
import {RootState} from "../../../store/root-store";
import {Store} from "@ngrx/store";
import {setCurrentQuestion} from "../../../pages/store/questions/qustions.actions";

@Component({
  selector: 'app-question-card',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnInit {
  @Input() question: Question | undefined
  @Output() payload!: EventEmitter<Question>
  constructor(
    private router: Router,
    private store: Store<RootState>
  ) { }

  ngOnInit(): void {
  }

  questionInfo(question: Question) {
    this.router.navigate(['/edit']).then(
      () => this.store.dispatch(setCurrentQuestion({question}))
    )
  }
}
