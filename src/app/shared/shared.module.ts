import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './components/question-card/question.component';
import { QuestionInfoComponent } from './components/question-info/question-info.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        QuestionComponent,
        QuestionInfoComponent
    ],
    exports: [
        QuestionComponent,
        QuestionInfoComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
