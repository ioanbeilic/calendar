import { Component, OnInit, Input } from '@angular/core';
import * as es from 'date-fns/locale/es';
import * as en from 'date-fns/locale/en';
import * as fr from 'date-fns/locale/fr';

@Component({
  selector: 'lib-month',
  templateUrl: './month.component.html',
  styles: [
    `
      /* FONT IMPORTS */

      @import url(
        https://fonts.googleapis.com/css?family=Open+Sans:300,
        400,
        700
      );
      @import url(https://fonts.googleapis.com/icon?family=Material+Icons);

      .icon {
        font-family: 'Material Icons', serif;
        font-style: normal;
        display: inline-block;
        vertical-align: middle;
        line-height: 1;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;

        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        font-feature-settings: 'liga';
      }

      /* VARIABLES */

      ::ng-deep :root {
        --main-color: #1a8fff;
        --text-color: #777;
        --text-color-light: #ccc;
        --border-color: #eee;
        --bg-color: #f9f9f9;
        --neutral-color: #fff;
      }

      /* GENERAL */

      ::ng-deep * {
        box-sizing: border-box;
      }

      ::ng-deep body {
        font-family: 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial',
          sans-serif;
        font-size: 1em;
        font-weight: 300;
        line-height: 1.5;
        color: var(--text-color);
        background: var(--bg-color);
        position: relative;
      }

      ::ng-deep header {
        display: block;
        width: 100%;
        padding: 1.75em 0;
        border-bottom: 1px solid var(--border-color);
        background: var(--neutral-color);
      }

      ::ng-deep header #logo {
        font-size: 175%;
        text-align: center;
        color: var(--main-color);
        line-height: 1;
      }

      ::ng-deep header #logo .icon {
        padding-right: 0.25em;
      }

      ::ng-deep main {
        display: block;
        margin: 0 auto;
        margin-top: 5em;
        max-width: 50em;
      }

      /* GRID */

      ::ng-deep .row {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
      }

      ::ng-deep .row-middle {
        align-items: center;
      }

      ::ng-deep .col {
        flex-grow: 1;
        flex-basis: 0;
        max-width: 100%;
      }

      ::ng-deep .col-start {
        justify-content: flex-start;
        text-align: left;
      }

      ::ng-deep .col-center {
        justify-content: center;
        text-align: center;
      }

      ::ng-deep .col-end {
        justify-content: flex-end;
        text-align: right;
      }

      /* Calendar */

      ::ng-deep .calendar {
        display: block;
        position: relative;
        width: 100%;
        background: var(--neutral-color);
        border: 1px solid var(--border-color);
      }

      ::ng-deep .header {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 115%;
        padding: 1.5em 0;
        border-bottom: 1px solid var(--border-color);
      }

      ::ng-deep .header .icon {
        cursor: pointer;
        transition: 0.15s ease-out;
      }

      ::ng-deep .header .icon:hover {
        transform: scale(1.75);
        transition: 0.25s ease-out;
        color: var(--main-color);
      }

      ::ng-deep .header .icon:first-of-type {
        margin-left: 1em;
      }

      ::ng-deep .header .icon:last-of-type {
        margin-right: 1em;
      }

      ::ng-deep .calendar .days {
        text-transform: uppercase;
        font-weight: 400;
        color: var(--text-color-light);
        font-size: 70%;
        padding: 0.75em 0;
        border-bottom: 1px solid var(--border-color);
      }

      ::ng-deep .calendar .body .cell {
        position: relative;
        height: 5em;
        border-right: 1px solid var(--border-color);
        overflow: hidden;
        cursor: pointer;
        background: var(--neutral-color);
        transition: 0.25s ease-out;
      }

      ::ng-deep .calendar .body .cell:hover {
        background: var(--bg-color);
        transition: 0.5s ease-out;
      }

      ::ng-deep .calendar .body .selected {
        border-left: 10px solid transparent;
        border-image: linear-gradient(45deg, #1a8fff 0%, #53cbf1 40%);
        border-image-slice: 1;
      }

      ::ng-deep .calendar .body .row {
        border-bottom: 1px solid var(--border-color);
      }

      ::ng-deep .calendar .body .row:last-child {
        border-bottom: none;
      }

      ::ng-deep .calendar .body .cell:last-child {
        border-right: none;
      }

      ::ng-deep .calendar .body .cell .number {
        position: absolute;
        font-size: 82.5%;
        line-height: 1;
        top: 0.75em;
        right: 0.75em;
        font-weight: 700;
      }

      ::ng-deep .calendar .body .disabled {
        color: var(--text-color-light);
        pointer-events: none;
      }

      ::ng-deep .calendar .body .cell .bg {
        font-weight: 700;
        line-height: 1;
        color: var(--main-color);
        opacity: 0;
        font-size: 5em;
        position: absolute;
        bottom: 0;
        right: -0.05em;
        transition: 0.25s ease-out;
        letter-spacing: -0.07em;
      }

      ::ng-deep .calendar .body .cell:hover .bg,
      ::ng-deep .calendar .body .selected .bg {
        opacity: 0.05;
        transition: 0.5s ease-in;
      }

      ::ng-deep .calendar .body .col {
        flex-grow: 0;
        flex-basis: calc(100% / 7);
        width: calc(100% / 7);
      }

      ::ng-deep .year {
        display: flex;
        justify-content: space-between;
        display: -ms-flexbox;
        justify-content: center;
        -ms-flex-pack: justify;
        flex-wrap: wrap;
        -ms-flex-wrap: wrap;
      }

      ::ng-deep .year-calendar {
        width: 500px;
        margin: 1em;
      }
    `
  ]
})
export class MonthComponent implements OnInit {
  @Input() month;
  @Input() dayFormat = 'dd';
  @Input() weekStartsOn;
  @Input() changeMonth: boolean;
  @Input() language: string;
  lang: any;

  constructor() {}

  ngOnInit() {
    if (this.language) {
      this.getLanguage(this.language);
    } else {
      this.getLanguage('en');
    }
  }

  changeCurrentMonth(event) {
    this.month = event;
  }

  getLanguage(language) {
    if (language !== undefined || language != null) {
      switch (language) {
        case 'es':
          this.lang = { locale: es };
          break;
        case 'en':
          this.lang = { locale: en };
          break;
        case 'fr':
          this.lang = { locale: fr };
          break;
        default:
          this.lang = { locale: en };
      }
    }
  }
}
