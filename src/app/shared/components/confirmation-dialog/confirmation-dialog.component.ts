import { Component, Inject, Input, EventEmitter, Output } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Confirmation } from '../../models/confirmation';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent {
  @Input() confirmation: Confirmation;
  @Output() confirm = new EventEmitter<boolean>();
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Confirmation
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
