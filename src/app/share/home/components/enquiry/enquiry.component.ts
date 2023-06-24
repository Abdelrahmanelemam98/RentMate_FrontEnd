import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css'],
})
export class EnquiryComponent {
  myForm!: any;
  ngOnInit() {
    this.myForm = new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      message: new FormControl(''),
    });
  }
  onSubmit() {
    localStorage.setItem('formdata', JSON.stringify(this.myForm.value));
  }
}
