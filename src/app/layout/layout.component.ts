import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../shared/services/general/notification.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {}
}
