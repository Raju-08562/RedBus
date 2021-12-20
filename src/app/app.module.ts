import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { AvailableBusesListModule } from './available-buses-list/available-buses-list.module';
import { SearchBusModule } from './search-bus/search-bus.module';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AvailableBusesListModule,
    SearchBusModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
   
  ],
  exports:[
    AvailableBusesListModule,
    SearchBusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
