import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup  } from '@angular/forms';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import {AddpropertyService} from '../../services/addproperty.service'
import { Router } from '@angular/router';
// import { Cities } from 'src/app/share/home/Models/cties';
import { City } from '../../Models/City'
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  allCities:City[]=[]
  showAddproperty: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private addservices:AddpropertyService ) {}
  addproperty: any;

 /* ownerId:number,
  public title:string ,
  public propertyType:number ,
  public propertyPrice:number ,
  public cityId:number ,
  public streetDetails:string ,
  public noOfBedsPerApartment:number ,
  public noOfBedsInTheRoom:number ,
  public noOfRooms:number ,
  public noOfBathroom:number ,
  public appartmentArea:number ,
  public floorNumber:number ,
  public hasKitchen: boolean,
  public hasAirConditioner: boolean,
  public hasMicrowave: boolean,
  public hasDishWasher: boolean,
  public hasWifi: boolean,
  public hasRefrigerator: boolean,
  public hasDishesAndSilverware: boolean,
  public hasParking: boolean,
  public hasWaterHeater: boolean,
  public hasElivator: boolean*/
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
      floornumbeer: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      hasKitchen: [false],
      hasAirConditioner: [false],
      hasMicrowave: [false],
      hasDishWasher: [false],
      hasWifi: [false],
      hasRefrigerator: [false],
      hasDishesAndSilverware: [false],
      hasParking: [false],
      hasWaterHeater: [false],
      hasElevator: [false],
    });
   
  }

  savedata() {
    if (this.addproperty.valid) {
      // Save data to local storage
      // ...
      console.log("data saved");
     localStorage.setItem('formdata', JSON.stringify(this.addproperty.value));
     
    //  this.router.navigate(['/userdashboard/addproperty/stripe']);
      // Reset the form after saving data
      this.addproperty.reset();
     
    } else {
      // Validate all form fields and display error messages
      Object.keys(this.addproperty.controls).forEach((key) => {
        const control = this.addproperty.get(key);
        control.markAsDirty();
        control.markAsTouched();
        console.log("data not saved");
      });
    }
    this.router.navigate(['/userdashboard/addproperty/stripe']);
    // this.router.navigate(['/userdashboard/addproperty/stripe']);
   
  }
  
  getCityByGovernorate(){
    const selectedGovernorateId = this.addproperty.controls['governorate'].value;
    this.addservices.getCityById(selectedGovernorateId).subscribe(data=>{
      this.allCities=data;
      // console.log(this.allCities);

    })
      // this.allCities = this.addservices.getCityById(govId);
      // this.allCities = this.addServices.getCityById(govId);
    

  }
  // getCityByGovernorate() {
  //   const selectedGovernorateId = this.addproperty.controls['governorate'].value;
  //   // Call a function or make an API request to retrieve the cities based on the selected governorate ID
  //   // Pass the selectedGovernorateId to the function or API request
  // }
  
}
;