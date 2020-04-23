import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}
  showSuccessMessage(message: string, duration: number = 3000) {
    this.snackBar.open(message, undefined, {
      duration: duration,
      panelClass: ['notification-success'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  showErrorMessage(message: string, duration: number = 3000) {
    this.snackBar.open(message, undefined, {
      duration: duration,
      panelClass: ['notification-error'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  showInfoMessage(message: string, duration: number = 3000) {
    this.snackBar.open(message, undefined, {
      duration: duration,
      panelClass: ['notification-info'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  showWarningMessage(message: string, duration: number = 3000) {
    this.snackBar.open(message, undefined, {
      duration: duration,
      panelClass: ['notification-warning'],
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
