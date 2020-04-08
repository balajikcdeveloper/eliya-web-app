import { Component, OnInit, Input } from '@angular/core';
import { HttpStatusCode } from 'src/app/constents/http-status-code';

@Component({
  selector: 'app-error-page',
  template: `<div class="wrapper" fxLayout="column" fxLayoutAlign="space-evenly center">
              <h1>{{code}}</h1>
              <h2>{{heading}}</h2>
              <p>{{message}}</p>
            </div>`,
  styles: [`:host {align-self: center;}
             .wrapper {
               color: rgba(0,0,0,.38);
               text-align: center;
               padding: 50px 0;}
             h1 {
               font-size: 140px;
               font-weight: lighter;
               margin: 0 0 50px 0;
             }
           `]
})
export class ErrorPageComponent implements OnInit {
  @Input()
  code: number = HttpStatusCode.Forbidden;

  @Input()
  heading:string = "Forbidden Access";

  @Input()
  message: string = "You have navigated to Unauthorized Access"; 
  constructor() { }

  ngOnInit() {
  }

}
