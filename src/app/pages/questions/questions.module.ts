import { NgModule } from '@angular/core';
import { QuestionsComponent } from './questions.component';
import {QuestionsRoutingModule} from "./questions-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    QuestionsComponent
  ],
    imports: [
      CommonModule,
      QuestionsRoutingModule,
      SharedModule
    ]
})
export class QuestionsModule { }
