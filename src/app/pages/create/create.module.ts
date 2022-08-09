import { NgModule } from '@angular/core';
import { CreateComponent } from './create.component';
import {CreateRoutingModule} from "./create-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    CreateComponent
  ],
    imports: [
        CreateRoutingModule,
        ReactiveFormsModule,
        CommonModule
    ]
})
export class CreateModule { }
