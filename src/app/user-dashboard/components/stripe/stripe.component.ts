import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {AddpropertyService} from '../../services/addproperty.service'
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private property: AddpropertyService) {}
  // formData: any[] = []; // Array to hold form data
  formGroup: any;

  
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      creditcardname: ['', [Validators.required]],
      cardnumber: ['', [Validators.required, Validators.pattern(/^\d+$/), Validators.minLength(16),Validators.maxLength(16)]],
      expirationyear: ['', [Validators.required, Validators.pattern(/^\d+$/),Validators.minLength(4),Validators.maxLength(4)]],
      expirationmonth: ['', [Validators.required, Validators.pattern(/^\d+$/),Validators.minLength(2),Validators.maxLength(2)]],
      cvc: ['', [Validators.required, Validators.pattern(/^\d+$/),Validators.pattern(/^\d+$/), Validators.minLength(3),Validators.maxLength(3)]],
     
  })}
  onSubmit() {
    if (this.formGroup.valid) {
      
      
     
      // this.property.savePropertyData(this.formGroup.value).subscribe((result)=>{
      //   console.log(result);
      // }
      // )
      this.router.navigate(['/image']);
           
     
  
     
      this.formGroup.reset();
    } 
    else {
      Object.keys(this.formGroup.controls).forEach((key) => {
        const control = this.formGroup.get(key);
        control.markAsDirty();
        control.markAsTouched();
      });
    }
    
  }
  

}

/*  onSubmit() {
    if (this.formGroup.valid) {
      
      // ...
      console.log("data saved");
     
  
     
      this.formGroup.reset();
    } 
    else {
      Object.keys(this.formGroup.controls).forEach((key) => {
        const control = this.formGroup.get(key);
        control.markAsDirty();
        control.markAsTouched();
      });
    }
  
}*/
