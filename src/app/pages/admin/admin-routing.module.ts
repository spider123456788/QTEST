import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {EditComponent} from "./components/edit/edit.component";
import {CreateComponent} from "./components/create/create.component";
import {QuestionInfoComponent} from "../../shared/components/question-info/question-info.component";

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'edit', component: EditComponent },
  { path: 'create', component: CreateComponent },
  { path: ':questionTitle', component: QuestionInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
