import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpRequestService } from 'src/app/service/http-request.service';
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
  public messagecolor: string = 'white';



  constructor(public httpRequestService: HttpRequestService) {
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
        noSpaceValidator
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      repassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        matchingPassword
      ]),
    }, {
      validators: matchingPassword
    })
  }

  //SERVICES WITH BACKEND

  onSubmit(event: any) {
    this.isInputsValid(event);
    if (this.signupForm.valid) {
      const json = {
        "pseudo": this.signupForm.controls['username'].value,
        "firstName": this.signupForm.controls['firstname'].value,
        "lastName": this.signupForm.controls['lastname'].value,
        "email": this.signupForm.controls['email'].value,
        "password": this.signupForm.controls['password'].value,
        "birthDay": "2000-01-01"//U NEED TO DYNAMICLY SET THIS TOO
      };
      this.httpRequestService.sendPostRequest('public/auth/signup', json).subscribe();
    }
  }



  //DESIGN CHANGES

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
    if (!this.memoryOfValidInputs.has(fieldName)) {
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
          this.messagecolor = 'rgb(2,212,149)';
          break;
        }
        case 'lastname': {
          this.message = "Don't worry I will remember it " + this.signupForm.get(fieldName)?.value;
          this.messagecolor = 'rgb(2,212,149)';
          break;
        }
        case 'username': {
          this.message = "I like it";
          this.messagecolor = 'rgb(2,212,149)';
          break;
        }
        case 'email': {
          this.message = "It's safe in my Database don't worry";
          this.messagecolor = 'rgb(2,212,149)';
          break;
        }
        case 'password': {
          this.message = "I swear I didn't saw anything";
          this.messagecolor = 'rgb(2,212,149)';
          break;
        }
        case 'repassword': {
          this.message = "I swear I didn't saw anything";
          this.messagecolor = 'rgb(2,212,149)';
          break;
        }
      }
    } else if (!control?.valid && this.memoryOfValidInputs.get(fieldName)) {
      if (this.smileRadius >= 0) {
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
