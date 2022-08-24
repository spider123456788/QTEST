import {AfterContentInit, Component, OnInit} from '@angular/core';
import {Question} from "../../../../models/question.model";
import {Store} from "@ngrx/store";
import {createQuestion, setCurrentQuestion} from "../../../store/questions/qustions.actions";
import {RootState} from "../../../../store/root-store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<RootState>, private router: Router) {
  }

  ngOnInit(): void {
  }

  createQuestion(question: Question) {
    this.router.navigate(['/admin']).then(
      () => this.store.dispatch(createQuestion({question}))
    )
  }
}
