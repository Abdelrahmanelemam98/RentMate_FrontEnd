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

  addproperty2: any = {};

mapProperties() {
  this.addproperty2.ownerId = "1";
  this.addproperty2.title = this.addproperty.value.title;
  this.addproperty2.propertyType = this.addproperty.value.type;
  this.addproperty2.propertyPrice = this.addproperty.value.price;
  this.addproperty2.cityId = this.addproperty.value.city;
  this.addproperty2.streetDetails = this.addproperty.value.street;
  this.addproperty2.description = this.addproperty.value.propertydescription;
  this.addproperty2.noOfBedsPerApartment = this.addproperty.value.numberofbedsperapartment;
  this.addproperty2.noOfBedsInTheRoom = this.addproperty.value.numbersofbedsintheroom;
  this.addproperty2.noOfRooms = this.addproperty.value.numberofrooms;
  this.addproperty2.noOfBathroom = this.addproperty.value.NoOfBathroom;
  this.addproperty2.appartmentArea = this.addproperty.value.AppartmentArea;
  this.addproperty2.floorNumber = this.addproperty.value.floornumbeer;
  this.addproperty2.hasKitchen = this.addproperty.value.hasKitchen;
  this.addproperty2.hasAirConditioner = this.addproperty.value.hasAirConditioner;
  this.addproperty2.hasMicrowave = this.addproperty.value.hasMicrowave;
  this.addproperty2.hasDishWasher = this.addproperty.value.hasDishWasher;
  this.addproperty2.hasWifi = this.addproperty.value.hasWifi;
  this.addproperty2.hasRefrigerator = this.addproperty.value.hasRefrigerator;
  this.addproperty2.hasDishesAndSilverware = this.addproperty.value.hasDishesAndSilverware;
  this.addproperty2.hasParking = this.addproperty.value.hasParking;
  this.addproperty2.hasWaterHeater = this.addproperty.value.hasWaterHeater;
  this.addproperty2.hasElivator = this.addproperty.value.hasElevator;
}

  savedata() {

    if (this.addproperty.valid) {
        // Save data to local storage
        console.log("data saved");
        localStorage.setItem('formdata', JSON.stringify({
        "ownerId": "3",
        "title": "3333",
        "propertyType": 1,
        "propertyPrice": 30,
        "cityId": 30,
        "streetDetails": "33",
        "description": "33",
        "noOfBedsPerApartment": 30,
        "noOfBedsInTheRoom": 30,
        "noOfRooms": 30,
        "noOfBathroom": 30,
        "appartmentArea": 30,
        "floorNumber": 30,
        "hasKitchen": true,
        "hasAirConditioner": true,
        "hasMicrowave": true,
        "hasDishWasher": true,
        "hasWifi": true,
        "hasRefrigerator": true,
        "hasDishesAndSilverware": true,
        "hasParking": true,
        "hasWaterHeater": true,
        "hasElivator": true
      }));

      console.log(this.addproperty2);
      //  this.router.navigate(['/userdashboard/addproperty/stripe']);
        // Reset the form after saving data
        this.addproperty.reset();
        this.router.navigate(['/userdashboard/addproperty/stripe']);
     
    } 
    else {
      // Validate all form fields and display error messages
      Object.keys(this.addproperty.controls).forEach((key) => {
        const control = this.addproperty.get(key);
        control.markAsDirty();
        control.markAsTouched();
        console.log("data not saved");
      });
    }
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