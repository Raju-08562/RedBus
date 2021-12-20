import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBusRoutingModule } from './search-bus-routing.module';
import { SearchBusComponent } from './search-bus.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchBusComponent
  ],
  imports: [
    CommonModule,
    SearchBusRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SearchBusModule { }
