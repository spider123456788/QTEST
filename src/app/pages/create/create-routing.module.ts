import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateComponent} from "./create.component";
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  { path: '', component: CreateComponent }
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
