import { Component, OnInit } from '@angular/core';
import {RootState} from "../../../../store/root-store";
import {Store} from "@ngrx/store";
import {Observable, tap} from "rxjs";
import {Question} from "../../../../models/question.model";
import {selectCurrentQuestion} from "../../../store/questions/questions.selectors";
import {editQuestion} from "../../../store/questions/qustions.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {
  question$: Observable<Question | null> = this.store.select(selectCurrentQuestion)

  constructor(private store: Store<RootState>, private router: Router) { }

  ngOnInit(): void {
  }

  editQuestion(question: Question) {
    this.router.navigate(['/admin']).then(
      () => this.store.dispatch(editQuestion({question}))
    )
  }
}
