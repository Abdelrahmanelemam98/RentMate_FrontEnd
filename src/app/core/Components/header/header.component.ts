import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/login/Components/login-dialog/login-dialog.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private matDialog: MatDialog) {}
  openDialog() {
    this.matDialog.open(LoginDialogComponent, {
      width: '400px',
      height: '550px',
    });
  }
}
