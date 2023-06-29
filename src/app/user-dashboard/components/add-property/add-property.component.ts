import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup  } from '@angular/forms';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import {AddpropertyService} from '../../services/addproperty.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router) {}
  addproperty: any;


  ngOnInit(): void {
    this.addproperty = this.formBuilder.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      numberofrooms: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      numbersofbedsintheroom: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      numberofbedsperapartment: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      NoOfBathroom: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      AppartmentArea: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      propertydescription: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      governorate: ['', Validators.required],
      city: ['', Validators.required],
      street: ['', Validators.required],
      hasKitchen: [false],
      hasAirConditioner: [false],
      hasMicrowave: [false],
      hasDishWasher: [false],
      hasWifi: [false],
      hasRefrigerator: [false],
      hasDishesAndSilverware: [false],
      hasParking: [false],
      hasWaterHeater: [false]
    });
   
  }

  savedata() {
    if (this.addproperty.valid) {
      // Save data to local storage
      // ...
      console.log("data saved");
     localStorage.setItem('formdata', JSON.stringify(this.addproperty.value));
  
      // Reset the form after saving data
      this.addproperty.reset();
      this.router.navigate(['/stripe']);
    } else {
      // Validate all form fields and display error messages
      Object.keys(this.addproperty.controls).forEach((key) => {
        const control = this.addproperty.get(key);
        control.markAsDirty();
        control.markAsTouched();
      });
    }
   
  }
  
  
//   addproperty: FormGroup;
// constructor(){
  
//   this.addproperty = new FormGroup( {
//     title : new FormControl('', ),
//     type  : new FormControl('',Validators.required),
//     numberofrooms: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
//     numbersofbedsintheroom : new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
//     numberofbedsperapartment: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
//     NoOfBathroom: new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
//     AppartmentArea:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
//     propertydescription : new FormControl('',Validators.required),
//     price:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]), 
//     governorate:new FormControl('',Validators.required), 
//     city:new FormControl('',Validators.required), 
//     street:new FormControl('',Validators.required), 
//     hasKitchen:new FormControl(''), 
//     hasAirConditioner:new FormControl(''),
//     hasMicrowave:new FormControl(''),
//     hasDishWasher:new FormControl(''),
//     hasWifi:new FormControl(''),
//     hasRefrigerator:new FormControl(''),
//     hasDishesAndSilverware:new FormControl(''),
//     hasParking:new FormControl(''),
//     hasWaterHeater:new FormControl(''),
    
    // image::new FormControl('')


// });
// }
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
//   savedata(){
//     // console.log(this.addproperty.value)
//     // if(this.addproperty.valid){
//     //   this.property.savePropertyData(this.addproperty.value).subscribe((result)=>{
//     //     console.log(result);
//     //   });
//     // }
//     if(this.addproperty.valid){
//       console.log("data saved");
//     localStorage.setItem('formdata', JSON.stringify(this.addproperty.value));
//   }else{
//     Object.keys(this.addproperty.controls).forEach((key) => {
//       const control = this.addproperty.get(key);
//       control.markAsDirty();
//       control.markAsTouched();
//     });
//   }
    
//   }
}
;