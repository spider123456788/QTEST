import { NgModule } from '@angular/core';
import { EditComponent } from './edit.component';
import {EditRoutingModule} from "./edit-routing.module";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    EditComponent
  ],
    imports: [
        EditRoutingModule,
        SharedModule
    ]
})
export class EditModule { }
