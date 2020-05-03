import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-category-icon',
  templateUrl: './category-icon.component.html',
  styleUrls: ['./category-icon.component.scss'],
})
export class CategoryIconComponent implements OnInit {
  iconList = [
    { icon: '3d_rotation' },
    { icon: 'accessibility' },
    { icon: 'account_balance' },
    { icon: 'account_balance_wallet' },
    { icon: 'account_circle' },
    { icon: 'add_shopping_cart' },
    { icon: 'android' },
    { icon: 'card_giftcard' },
    { icon: 'credit_card' },
    { icon: 'pets' },
    { icon: 'receipt' },
    { icon: 'home' },
    { icon: 'store' },
    { icon: 'theaters' },
    { icon: 'work' },
    { icon: 'games' },
    { icon: 'play_circle_filled' },
    { icon: 'videocam' },
  ];
  constructor(private dialogRef: MatDialogRef<CategoryIconComponent>) {}

  ngOnInit(): void {}
  selectIcon(icon) {
    this.dialogRef.close(icon.icon);
  }
}
