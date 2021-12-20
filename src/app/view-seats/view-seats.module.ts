import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewSeatsRoutingModule } from './view-seats-routing.module';
import { ViewSeatsComponent } from './view-seats.component';


@NgModule({
  declarations: [
    ViewSeatsComponent
  ],
  imports: [
    CommonModule,
    ViewSeatsRoutingModule
  ]
})
export class ViewSeatsModule { }
