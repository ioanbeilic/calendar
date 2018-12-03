import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { format, addMonths, subMonths } from 'date-fns';

@Component({
  selector: 'lib-render-header',
  templateUrl: './render-header.component.html'
})
export class RenderHeaderComponent implements OnInit {
  @Input() month;
  @Input() changeMonth: boolean;
  @Input() lang: any;
  dateFormat = 'MMMM';
  @Output() changeCurrentMonth = new EventEmitter<Date>();
  currentMonth: string;

  constructor() {}

  ngOnInit() {
    this.currentMonth = format(this.month, this.dateFormat, this.lang);
  }

  nextMonth() {
    this.month = addMonths(this.month, 1);
    this.currentMonth = format(this.month, this.dateFormat);
    this.changeCurrentMonth.emit(this.month);
  }

  prevMonth() {
    this.month = subMonths(this.month, 1);
    this.currentMonth = format(this.month, this.dateFormat);
    this.changeCurrentMonth.emit(this.month);
  }
}
