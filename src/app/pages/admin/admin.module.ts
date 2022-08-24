import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";
import {EditComponent} from "./components/edit/edit.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CreateComponent} from "./components/create/create.component";



@NgModule({
  declarations: [
    AdminComponent,
    EditComponent,
    CreateComponent
  ],
    imports: [
        AdminRoutingModule,
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
    ],
  exports: [
    AdminRoutingModule
  ]
})
export class AdminModule { }
