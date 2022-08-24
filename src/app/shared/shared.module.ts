import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { QuestionInfoComponent } from './components/question-info/question-info.component';
import {SortPipe} from "./pipes/sort.pipe";



@NgModule({
    declarations: [
        QuestionCardComponent,
        QuestionFormComponent,
        QuestionInfoComponent,
        SortPipe
    ],
    exports: [
        QuestionCardComponent,
        QuestionFormComponent,
        SortPipe
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
