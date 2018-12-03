import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-month',
  templateUrl: './month.component.html'
})
export class MonthComponent implements OnInit {
  @Input() month;
  @Input() dayFormat = 'dddd';
  @Input() weekStartsOn = 1;
  @Input() changeMonth: boolean;

  constructor() {}

  ngOnInit() {}

  changeCurrentMonth(event) {
    this.month = event;
  }
}
