import { NgModule } from '@angular/core';
import { CalendarComponent } from './calendar.component';
import { MonthComponent } from './month/month.component';

@NgModule({
  declarations: [CalendarComponent, MonthComponent],
  imports: [
  ],
  exports: [CalendarComponent]
})
export class CalendarModule { }
