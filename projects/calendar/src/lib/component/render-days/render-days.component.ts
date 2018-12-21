import { Component, OnInit, Input } from '@angular/core';
import { startOfWeek, format, addDays } from 'date-fns';

@Component({
  selector: 'lib-render-days',
  templateUrl: './render-days.component.html'
})
export class RenderDaysComponent implements OnInit {
  @Input() month;
  @Input() dayFormat;
  @Input() weekStartsOn;
  @Input() lang: any;

  days = [];
  startDate: Date;

  constructor() {}

  ngOnInit() {
    this.getDateName();
  }

  getDateName() {
    if (this.lang) {
      this.startDate = startOfWeek(this.month, {
        weekStartsOn: this.weekStartsOn
      });
      for (let i = 0; i < 7; i++) {
        this.days.push(
          format(addDays(this.startDate, i), this.dayFormat, this.lang)
        );
      }
    }
  }
}
