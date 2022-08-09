import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Question, QuestionField} from "../../../models/question.model";
import {Store} from "@ngrx/store";
import {createQuestion} from "../../../pages/store/questions/qustions.actions";
import {selectCurrentQuestion} from "../../../pages/store/questions/questions.selectors";
import {RootState} from "../../../store/root-store";
import {Observable} from "rxjs";

@Component({
  selector: 'app-question-card-info',
  templateUrl: './question-info.component.html',
  styleUrls: ['./question-info.component.sass']
})
export class QuestionInfoComponent implements OnInit {
  questionForm!: FormGroup
  fields: QuestionField[] = [{
    text: ''
  }]
  question$: Observable<Question | null> = this.store.select(selectCurrentQuestion)
  QUESTION_TYPES = [
    {
      type: 'Single',
      text: 'Single choice - the ability to choose only one option from the proposed'
    },
    {
      type: 'Multi',
      text: 'Multiple Choice - the ability to choose several of the proposed options'
    },
    {
      type: 'Open',
      text:'Open - the ability to write (type) your answer'
    }
  ]

  constructor(private store: Store<RootState>, private fb: FormBuilder) {
    this._createForm()
  }

  ngOnInit(): void {
  }

  private _createForm() {
    this.questionForm = this.fb.group({
      title: [],
      type: [],
      fields: this.fb.group({
        field: []
      }),
    })
  }

  newField(fields: QuestionField[]) {
    if (this.fields.length < 1)
      this.fields = fields
    this.fields.push({
      text: ''
    })
  }

  create() {
    let newQuestion: Question = {
      title: this.questionForm.get('title')?.value,
      type: this.questionForm.get('type')?.value,
      fields: this.fields,
      isAnswered: false,
      createdDate:  new Date(),
      userId: 1
    };
    this.store.dispatch(createQuestion({question: newQuestion}))
  }

}
