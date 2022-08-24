import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuestionInfoComponent} from "./shared/components/question-info/question-info.component";

const routes: Routes = [
  { path: '', redirectTo: '/questions', pathMatch: 'full' },
  { path: 'questions', loadChildren: () => import('./pages/questions/questions.module').then( m => m.QuestionsModule) },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
