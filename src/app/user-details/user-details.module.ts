import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsComponent } from './user-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,ReactiveFormsModule
  ]
})
export class UserDetailsModule { }
