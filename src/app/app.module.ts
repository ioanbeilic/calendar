import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CalendarModule } from 'calendar';

import { CalendarModule } from 'projects/calendar/src/public_api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CalendarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
