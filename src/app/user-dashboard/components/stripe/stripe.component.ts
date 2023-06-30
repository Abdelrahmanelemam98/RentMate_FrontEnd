import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {AddpropertyService} from '../../services/addproperty.service'
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { LocalStorageService } from 'angular-webstorage-service';
@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit {
   obj: any = {
    email: "",
    name: "",
    creditCard: {
      name: "",
      cardNumber: "",
      expirationYear: "",
      expirationMonth: "",
      cvc: ""
    }
  };
  obj2 : any={
    customerId: "cus_OAudcL9qKHbmmc",
    receiptEmail: "",
    description: "Demo product for Stripe .NET API",
    currency: "USD",
    amount: 50
  };
  obj3 : any={
    customerId: "cus_OAudcL9qKHbmmc",
    receiptEmail: "",
    description: "",
    currency: "usd",
    amount: 1000,
    paymentId: "ffffffff"
  }
  result : any;
  constructor(private formBuilder: FormBuilder, private router: Router, private property: AddpropertyService, private addservices: AddpropertyService) {}
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
    //   const storedData = JSON.parse(localStorage.getItem('formdata'));
    // formData = storedData;
  })}
  onSubmit() {
    if (this.formGroup.valid) {
      this.obj.name = this.formGroup.controls['name'].value;
      this.obj.email = this.formGroup.controls['email'].value;
      this.obj.creditCard.name = this.formGroup.controls['creditcardname'].value;
      this.obj.creditCard.cardNumber = this.formGroup.controls['cardnumber'].value;
      this.obj.creditCard.expirationYear = this.formGroup.controls['expirationyear'].value;
      this.obj.creditCard.expirationmonth = this.formGroup.controls['expirationmonth'].value;
      this.obj.creditCard.cvc = this.formGroup.controls['cvc'].value;
      // const creditCardData = this.formGroup.value
      

      this.addservices.addCustomer(this.obj).subscribe(
         (result: any) => {
        this.result = result;
      });


      this.obj2.receiptEmail=this.formGroup.controls['email'].value;

      this.addservices.stripePayment(this.obj2).subscribe(data=>{
          this.obj3 = data;
          console.log(data);
      })
      
      if(this.obj3.paymentId != ""){
        const formData= localStorage.getItem('formdata');
        console.log(formData)
        this.addservices.saveProperty(formData)
        console.log("done")
      }
      else
      {
        console.log("not saved");
      }

     console.log(this.formGroup.value);
  
      this.router.navigate(['/userdashboard/addproperty/image']);
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


