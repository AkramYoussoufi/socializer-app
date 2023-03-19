import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { noSpaceValidator, usernameValidator, matchingPassword } from 'src/app/utility/customValidator/customvalidators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public signupForm: FormGroup;
  public eyeHeigth: string = '20px';
  public smileRadius: number = 0;
  public message: string = "Welcome I'm pleased to hear that you gonna join us";
  public memoryOfValidInputs: Map<string, boolean> = new Map<string, boolean>();
  messagecolor: string = 'white';



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
    }, {
      validators: matchingPassword
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

  public isInputsValid(event: any) {
    const fieldName: string = event.target.name;
    const control = this.signupForm.get(fieldName);
    if(this.memoryOfValidInputs.size == 0){
      this.memoryOfValidInputs.set(fieldName, control?.valid ? false : true)
    }
    if (control?.valid && !this.memoryOfValidInputs.get(fieldName)) {
      if (this.smileRadius < 40) {
        this.smileRadius = this.smileRadius + 6.7;
        this.memoryOfValidInputs.set(fieldName, true)
      }
      switch (fieldName) {
        case 'firstname': {
          this.message = "Nice to meet you " + this.signupForm.get(fieldName)?.value;
          this.messagecolor = 'lightgreen';
          break;
        }
        case 'lastname': {
          this.message = "Don't worry I will remember it " + this.signupForm.get(fieldName)?.value;
          this.messagecolor = 'lightgreen';
          break;
        }
        case 'username': {
          this.message = "I like it";
          this.messagecolor = 'lightgreen';
          break;
        }
        case 'email': {
          this.message = "It's safe in my Database don't worry";
          this.messagecolor = 'lightgreen';
          break;
        }
        case 'password': {
          this.message = "I swear I didn't saw anything";
          this.messagecolor = 'lightgreen';
          break;
        }
        case 'repassword': {
          this.message = "I swear I didn't saw anything";
          this.messagecolor = 'lightgreen';
          break;
        }
      }
    } else if (!control?.valid && this.memoryOfValidInputs.get(fieldName)) {
      if (this.smileRadius > 0) {
        this.smileRadius = this.smileRadius - 6.7;
        this.memoryOfValidInputs.set(fieldName, false)
      }
      switch (fieldName) {
        case 'firstname': {
          this.message = "Make sure to use no space and only characters";
          this.messagecolor = 'red';
          break;
        }
        case 'lastname': {
          this.message = "Make sure to use no space and only characters";
          this.messagecolor = 'red';
          break;
        }
        case 'username': {
          this.message = "Make sure to use one space between two words only";
          this.messagecolor = 'red';
          break;
        }
        case 'email': {
          this.message = "Are you sure this is a valid email adresse ?";
          this.messagecolor = 'red';
          break;
        }
        case 'password': {
          this.message = "Your password is weak give it more length";
          this.messagecolor = 'red';
          break;
        }
        case 'repassword': {
          this.message = "Your password is weak give it more length";
          this.messagecolor = 'red';
          break;
        }
      }
    }
  }
}
