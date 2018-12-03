year and month calendar

angular 7

use

year = 2018;
changeMonth = false; // on month view change month
month = new Date();

<lib-year [year]="year" [changeMonth]="changeMonth"></lib-year>

<lib-month [month]="month" [changeMonth]="changeMonth"></lib-month>
