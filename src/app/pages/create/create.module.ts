import { NgModule } from '@angular/core';
import { CreateComponent } from './create.component';
import {CreateRoutingModule} from "./create-routing.module";



@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CreateRoutingModule
  ]
})
export class CreateModule { }
