import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MonthComponent } from './container/month/month.component';
import { RenderHeaderComponent } from './component/render-header/render-header.component';
import { RenderDaysComponent } from './component/render-days/render-days.component';
import { RenderCellsComponent } from './component/render-cells/render-cells.component';
import { YearComponent } from './container/year/year.component';

@NgModule({
  declarations: [
    MonthComponent,
    RenderHeaderComponent,
    RenderDaysComponent,
    RenderCellsComponent,
    YearComponent
  ],
  imports: [CommonModule],
  exports: [YearComponent, MonthComponent]
})
export class CalendarModule {}
