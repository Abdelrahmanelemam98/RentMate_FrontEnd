import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from 'src/app/register/components/register/register.component';
@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css'],
})
export class LoginDialogComponent {
  loginForm: FormGroup;

  constructor(private matDialog: MatDialog, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    const email = this.loginForm?.controls['email'].value;
    const password = this.loginForm?.controls['password'].value;
  }
  openDialog() {
    this.matDialog.open(RegisterComponent, {
      width: '450px',
      height: '900px',
    });
  }
}
