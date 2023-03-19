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
  public smileRadius: number = 0;
  public message: string = 'Hello and welcome';
  public messagecolor: string = 'white';
  public memoryOfValidInputs: Map<string, boolean> = new Map<string, boolean>();

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

  //CLOSE THE EYES UPON CLICKING THE PASSWORD INPUT
  closeEyes(): void {
    if (this.eyeHeigth == "0px") {
      this.eyeHeigth = "20px";
    }
    else {
      this.eyeHeigth = "0px";
    }
  }

  public isInputsValid(event: any) {
    const fieldName: string = event.target.name;
    const control = this.loginForm.get(fieldName);
    this.memoryOfValidInputs.set(fieldName, control?.valid ? false : true)
    if (control?.valid && !this.memoryOfValidInputs.get(fieldName)) {
      if (this.smileRadius < 40) {
        this.smileRadius = this.smileRadius + 20;
        this.memoryOfValidInputs.set(fieldName, true)
        switch (fieldName) {
          case 'email': {
            this.message = "Let's Go";
            this.messagecolor = 'lightgreen';
            break;
          }
          case 'password': {
            this.message = "I swear i didn't saw anything !";
            this.messagecolor = 'lightgreen';
            break;
          }
        }
      }
    } else if (!control?.valid && this.memoryOfValidInputs.get(fieldName)) {
      console.log("hi")
      if (this.smileRadius >= 0) {
        this.smileRadius = this.smileRadius - 20;
        this.memoryOfValidInputs.set(fieldName, false)
      }
      switch (fieldName) {
        case 'email': {
          this.message = 'Please make sure to put a valid email adresse';
          this.messagecolor = 'red';
          break;
        }
        case 'password': {
          this.message = 'Are you sure this is the right length for your password ?';
          this.messagecolor = 'red';
          break;
        }
      }
    }
  }
}
