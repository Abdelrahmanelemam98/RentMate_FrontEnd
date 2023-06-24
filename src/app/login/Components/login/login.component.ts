import { Component } from '@angular/core';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private matDialog: MatDialog) {}
  openDialog() {
    this.matDialog.open(LoginDialogComponent, {
      width: '400px',
      height: '550px',
    });
  }
}
