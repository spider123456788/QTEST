import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question, QuestionField} from "../../../models/question.model";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {selectCurrentQuestion} from "../../../pages/store/questions/questions.selectors";
import {RootState} from "../../../store/root-store";
import {Store} from "@ngrx/store";
import {setAnswerQuestion} from "../../../pages/store/questions/qustions.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-question-info',
  templateUrl: './question-info.component.html',
  styleUrls: ['./question-info.component.sass']
})
export class QuestionInfoComponent implements OnInit {

  question!: Question | null
  @Output() questionAnswer!: EventEmitter<{ title: string, fields: QuestionField[] }>
  questionForm!: FormGroup


  constructor(private fb: FormBuilder, private store: Store<RootState>, private router: Router) {
    this.store.select(selectCurrentQuestion).subscribe(
      question => this.question = question
    )
    this._createForm()

  }

  get questionFormField() {
    return this.questionForm.get('fieldsSingle')?.get('field')
  }

  get questionFormFields() {
    return this.questionForm.get('fields') as FormArray
  }

  private _createForm() {
    if (this.question?.type === 'Multi') {
      const defaultFields: QuestionField[] = [
        {text: 'Field 1', checked: false},
      ]
      this.questionForm = this.fb.group({
        fields: this.fb.array(
          this.question!.fields.map( x => defaultFields.indexOf(x) > -1)
        ),
      })
    }

    if (this.question?.type === 'Single') {
     this.questionForm = this.fb.group({
       fieldsSingle: this.fb.group({
         field: []
       })
      })
    }
    if (this.question?.type === 'Open') {
      this.questionForm = this.fb.group({
        openAnswer: []
      })
    }
  }

  ngOnInit(): void {
  }

  answer(question: Question) {
    let answerQuestion: Question;
    if (question.type === 'Open') {
      answerQuestion = {
        ...question,
        openAnswer: this.questionForm.get('openAnswer')?.value,
        answeredDate: new Date(),
        isAnswered: true
      }
    }
    if (question.type === 'Single') {
      answerQuestion = {
        ...question,
        fields: question.fields.map(field => {
          if (field.text === this.questionFormField?.value)
            field = {text: field.text, checked: true}
          return field
        }),
        answeredDate: new Date(),
        isAnswered: true
      }
    }
    if (question.type === 'Multi') {
        answerQuestion = {
          ...question,
          fields: question.fields.map((field, i) => field = {text: field.text , checked: this.questionFormFields.value[i]}),
          answeredDate: new Date(),
          isAnswered: true
        }
    }
    this.router.navigate(['/admin']).then(
      () => this.store.dispatch(setAnswerQuestion({answerQuestion}))
    )

  }
}
