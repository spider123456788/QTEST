import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Question, QuestionField} from "../../models/question.model";
import {Store} from "@ngrx/store";
import {QuestionsState} from "../store/questions/questions.reducer";
import {createQuestion} from "../store/questions/qustions.actions";
import {RootState} from "../../store/root-store";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {
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
  createQuestionForm!: FormGroup
  fields: QuestionField[] = [
    {text: ''}
  ]


  constructor(private store: Store<RootState>, private fb: FormBuilder) {
    this._createForm()
  }

  private _createForm() {
    this.createQuestionForm = this.fb.group({
      title: [],
      type: [],
      fields: this.fb.group({
        field: []
      }),
    })
  }

  newField() {
    this.fields.push({
      text: ''
    });
  }

  ngOnInit(): void {
  }
  create() {
    let newQuestion: Question = {
      title: this.createQuestionForm.get('title')?.value,
      type: this.createQuestionForm.get('type')?.value,
      fields: this.fields,
      isAnswered: false,
      createdDate:  new Date(),
      userId: 1
    };
    this.store.dispatch(createQuestion({question: newQuestion}))
  }
}
