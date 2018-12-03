import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
  SimpleChange
} from '@angular/core';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  format,
  isSameMonth,
  addDays,
  isSameDay
} from 'date-fns';

@Component({
  selector: 'lib-render-cells',
  templateUrl: './render-cells.component.html'
})
export class RenderCellsComponent implements OnInit, OnChanges {
  @Input() month;
  @Input() weekStartsOn;
  rows: any = [];

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    // const newMonth: SimpleChange = changes.month;
    this.rows = [];
    this.getMonth(this.month);
  }

  sameMonth(day) {
    return isSameMonth(day, this.month);
  }
  sameDay(day) {
    const today = Date.now();
    return isSameDay(day, today);
  }

  getMonth(currentMonth) {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, {
      weekStartsOn: this.weekStartsOn
    });
    const endDate = endOfWeek(monthEnd);
    const dateFormat = 'D';
    let day = startDate;
    let days = [];
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, dateFormat);
        const cloneDay = day;
        let id = null;
        const composedDate = [formattedDate, cloneDay];
        if (isSameMonth(day, currentMonth)) {
          id = format(day, 'YYYY-MM-DD');
          composedDate.push(id);
        }

        days.push(composedDate);
        day = addDays(day, 1);
      }
      this.rows.push(days);
      days = [];
    }
  }
}
