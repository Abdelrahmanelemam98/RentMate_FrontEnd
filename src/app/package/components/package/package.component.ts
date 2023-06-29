import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent {
  public constructor(private router: Router) {}
  onButtonClick() {
    this.router.navigate(['/userdashboard/addproperty']);
  }

}
