import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuestionsComponent} from "./questions.component";
import {QuestionInfoComponent} from "../../shared/components/question-info/question-info.component";

const routes: Routes = [
  { path: '', component: QuestionsComponent },
  { path: ':questionTitle', component: QuestionInfoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule { }
