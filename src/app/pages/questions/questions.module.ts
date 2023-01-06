import { NgModule } from '@angular/core';
import { QuestionsComponent } from './questions.component';
import {QuestionsRoutingModule} from "./questions-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {CommonModule} from "@angular/common";
import {AppModule} from "../../app.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HighchartsChartModule} from "highcharts-angular";



@NgModule({
  declarations: [
    QuestionsComponent
  ],
    imports: [
      CommonModule,
      QuestionsRoutingModule,
      SharedModule,
      FormsModule,
      ReactiveFormsModule,
      HighchartsChartModule
    ]
})
export class QuestionsModule { }
