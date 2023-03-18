import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { noSpaceValidator, usernameValidator } from 'src/app/utility/customValidator/customvalidators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public signupForm: FormGroup;
  public eyeHeigth: string = '20px';


  constructor() {
    this.signupForm = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(24),
        noSpaceValidator
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(24),
        noSpaceValidator
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(24),
        noSpaceValidator,
        usernameValidator
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(2),
        Validators.maxLength(24),
        noSpaceValidator
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      repassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
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
