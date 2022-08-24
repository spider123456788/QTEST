import {AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Question, QuestionField} from "../../../models/question.model";

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.sass']
})
export class QuestionFormComponent implements AfterViewInit {
  questionForm!: FormGroup
  @Input() question!: Question | null
  @Input() action!: string
  @Output() payload = new EventEmitter<Question>()
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

  constructor(private fb: FormBuilder) {
    this._createForm()
  }

  ngAfterViewInit(): void {
  }

  get questionFormFields() {
    return this.questionForm.get('fields') as FormArray
  }

  get questionFormType() {
    return this.questionForm.get('type') as FormControl
  }

  private _createForm() {

    this.questionForm = this.fb.group({
        title: [],
        type: ['Single'],
        fields: this.fb.array<QuestionField[]>([]),
    })

    if(this.question){
      this.questionForm.patchValue(this.question)
      this.questionFormFields.controls = this.question.fields.map( field => this.fb.group({
        text: field.text
      }))
    }

    if (!this.question)
      this.addField()

  }

  createField(): FormGroup {
    return this.fb.group({
      text: '',
    })
  }

  addField(): void {
    this.questionFormFields.push(this.createField())
  }
  removeField() {

  }

  submit() {
    (this.questionFormFields.value).map((el: QuestionField) => el.checked = false)

    let newQuestion: Question = {
      title: this.questionForm.get('title')?.value,
      type: this.questionForm.get('type')?.value,
      fields: this.questionFormFields.value,
      isAnswered: false,
      createdDate: new Date(),
      userId: 1
    };
    this.payload.emit(newQuestion)
  }


}
