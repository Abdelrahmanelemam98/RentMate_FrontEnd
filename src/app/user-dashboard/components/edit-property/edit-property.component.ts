import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup  } from '@angular/forms';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import {AddpropertyService} from '../../services/addproperty.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-property',
  templateUrl: './edit-property.component.html',
  styleUrls: ['./edit-property.component.css']
})
export class EditPropertyComponent implements OnInit {
  showMyproperty : boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {}
  editproperty: any;


  ngOnInit(): void {
    this.editproperty = this.formBuilder.group({
      title: [''],
      numbersofbedsintheroom: ['', [ Validators.pattern(/^\d+$/)]],
      numberofbedsperapartment: ['', [ Validators.pattern(/^\d+$/)]],
      propertydescription: [''],
     
    });
   
  }

  savedata() {
    if (this.editproperty.valid) {
      // Save data to local storage
      // ...
      console.log("data saved");
     localStorage.setItem('formdata', JSON.stringify(this.editproperty.value));
  
      // Reset the form after saving data
      this.editproperty.reset();
      this.showMyproperty= true;
      this.router.navigate(['/userdashboard/myproperty']);
    } else {
      // Validate all form fields and display error messages
      Object.keys(this.editproperty.controls).forEach((key) => {
        const control = this.editproperty.get(key);
        control.markAsDirty();
        control.markAsTouched();
      });
    }
   
  }
}
