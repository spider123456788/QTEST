import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/questions', pathMatch: 'full' },
  { path: 'questions', loadChildren: () => import('./pages/questions/questions.module').then( m => m.QuestionsModule) },
  { path: 'edit', loadChildren: () => import('./pages/edit/edit.module').then( m => m.EditModule) },
  { path: 'create', loadChildren: () => import('./pages/create/create.module').then( m => m.CreateModule) },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
