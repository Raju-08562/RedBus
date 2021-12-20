import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AvailableBusesListRoutingModule } from './available-buses-list-routing.module';
import { AvailableBusesListComponent } from './available-buses-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AvailableBusesListComponent
  ],
  imports: [
    CommonModule,
    AvailableBusesListRoutingModule,
    FormsModule,
    RouterModule
  ]
})
export class AvailableBusesListModule { }
