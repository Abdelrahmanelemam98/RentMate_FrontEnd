import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { LoginDialogComponent } from 'src/app/login/Components/login-dialog/login-dialog.component';
import { TitleStrategy } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private fb: FormBuilder, private matDialog: MatDialog) {}
  registerForm = this.fb.group({
    firstName: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z]*'),
      ],
    ],
    lastName: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-zA-Z]*'),
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('[^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$]*'),
      ],
    ],
    phone: [
      '',
      [Validators.required, Validators.pattern('^01[0125][0-9]{8}$')],
    ],
    address: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    password: [''],
  });

  getFirstName() {
    return this.registerForm.get('firstName');
  }
  getLastName() {
    return this.registerForm.get('lastName');
  }
  getEamil() {
    return this.registerForm.get('email');
  }
  getAddress() {
    return this.registerForm.get('address');
  }
  getPhone() {
    return this.registerForm.get('phone');
  }
  getPassword() {
    return this.registerForm.get('password');
  }
  display() {
    return this.registerForm;
  }
  openDialog() {
    this.matDialog.open(LoginDialogComponent, {
      width: '400px',
      height: '550px',
    });
  }
}
