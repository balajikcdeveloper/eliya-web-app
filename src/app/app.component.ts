import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  envName = environment.production;
  title = 'expense-web-app';
  constructor() {
    if (this.envName) console.log('Production Mode');
    else console.log('Development Mode');
  }
}
