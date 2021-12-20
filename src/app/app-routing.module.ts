import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  //{path: "" , component: ContentComponent},
  { path: '', loadChildren: () => import('./search-bus/search-bus.module').then(m => m.SearchBusModule) },
  { path: 'availableBusesList', loadChildren: () => import('./available-buses-list/available-buses-list.module').then(m => m.AvailableBusesListModule) },
  { path: 'ViewSeats', loadChildren: () => import('./view-seats/view-seats.module').then(m => m.ViewSeatsModule) },
  { path: 'ConfirmationPage', loadChildren: () => import('./confirmation-page/confirmation-page.module').then(m => m.ConfirmationPageModule) },
  { path: 'userDetails', loadChildren: () => import('./user-details/user-details.module').then(m => m.UserDetailsModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
