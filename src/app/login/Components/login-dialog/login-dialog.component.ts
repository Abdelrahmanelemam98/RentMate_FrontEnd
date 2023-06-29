import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegisterComponent } from 'src/app/register/components/register/register.component';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css'],
})
export class LoginDialogComponent {
  loginForm!: FormGroup;

  constructor(
    private matDialog: MatDialog,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<LoginDialogComponent>,
    private loginServiece: LoginService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    const loginModel = this.loginForm.value;
    this.loginServiece.login(loginModel).subscribe(
      (response: any) => {
        console.log(response);
        this.dialogRef.close();
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  openDialog() {
    this.matDialog.open(RegisterComponent, {
      width: '450px',
      height: '600px',
    });
  }
}
