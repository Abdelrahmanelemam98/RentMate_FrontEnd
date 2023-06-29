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
import { RegisterService } from '../../services/register.service';
import { User } from '../../model/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9, ]*'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });
  dialog: any;

  constructor(
    private registerService: RegisterService,
    private matDialog: MatDialog
  ) {}

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  get address() {
    return this.registerForm.get('address');
  }

  get password() {
    return this.registerForm.get('password');
  }
  openDialog() {
    this.matDialog.open(LoginDialogComponent, {
      width: '400px',
      height: '550px',
    });
  }
  async display() {
    if (this.registerForm.valid) {
      const user: User = {
        firstName: this.firstName?.value || '',
        lastName: this.lastName?.value || '',
        email: this.email?.value || '',
        phone: this.phone?.value || '',
        address: this.address?.value || '',
        password: this.password?.value || '',
      };
      try {
        const response = await this.registerService.register(user).toPromise();
        console.log('Registration successful:', response);
        this.openDialog();
        // Handle successful registration
      } catch (error) {
        console.error('Registration error:', error);
        // Handle registration error
      }
    }
  }
}
