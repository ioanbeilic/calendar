import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {
  @Input() year: number;
  @Input() dayFormat = 'dddd';
  @Input() weekStartsOn = 1;
  @Input() changeMonth: boolean;
  months: any = [];

  constructor() {}

  ngOnInit() {
    this.getYer(this.year);
  }

  getYer(year) {
    for (let i = 0; i < 12; i++) {
      this.months.push(new Date(Number(year), i));
    }
  }
}
