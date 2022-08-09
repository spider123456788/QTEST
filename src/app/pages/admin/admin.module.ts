import { NgModule } from '@angular/core';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../shared/shared.module";



@NgModule({
  declarations: [
    AdminComponent
  ],
    imports: [
        AdminRoutingModule,
        CommonModule,
        SharedModule
    ]
})
export class AdminModule { }
