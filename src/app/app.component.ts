import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'library';
  year = 2018;
  changeMonth = false;
  month = new Date();
  weekStartsOn = 1;
  language = 'es';
}
