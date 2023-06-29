import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/login/Components/login-dialog/login-dialog.component';
import { LoginService } from 'src/app/login/services/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private matDialog: MatDialog,
    private loginService: LoginService
  ) {}
  openDialog() {
    this.matDialog.open(LoginDialogComponent, {
      width: '400px',
      height: '550px',
    });
  }
  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn();
  }

  logout(): void {
    return this.loginService.logout();
  }
}
