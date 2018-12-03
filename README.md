year and month calendar

angular 7

use

install date-fns

use styles.scss for style

year = 2018;
changeMonth = false;
month = new Date();
weekStartsOn = 1;
language = 'es';

<lib-year [year]="year" [language]="language" [changeMonth]="changeMonth" [weekStartsOn]="weekStartsOn"></lib-year>

<lib-month [month]="month" [language]="language" [changeMonth]="changeMonth" [weekStartsOn]="weekStartsOn"></lib-month>
