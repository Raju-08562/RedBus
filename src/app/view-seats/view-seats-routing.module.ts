import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSeatsComponent } from './view-seats.component';

const routes: Routes = [{ path: '', component: ViewSeatsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewSeatsRoutingModule { }
