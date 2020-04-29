import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wallets-card',
  templateUrl: './wallets-card.component.html',
  styleUrls: ['./wallets-card.component.scss']
})
export class WalletsCardComponent implements OnInit {
  @Input()
  amount: number;
  @Input()
  name: string;

  lblAmount: number;
  lblName: string;
  constructor() { }

  ngOnInit(): void {
    this.lblAmount = this.amount;
    this.lblName = this.name;
  }

}
