import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { noSpaceValidator } from '../../utility/customValidator/customvalidators'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  public loginForm: FormGroup;
  public eyeHeigth: string = '20px';

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        noSpaceValidator
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ])
    })
  }

  closeEyes(): void {
    if (this.eyeHeigth == "0px") {
      this.eyeHeigth = "20px";
    }
    else {
      this.eyeHeigth = "0px";
    }
  }
}
