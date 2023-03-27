import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { noSpaceValidator } from '../../utility/customValidator/customvalidators';
import { HttpRequestService } from 'src/app/service/http-request.service';
import { finalize } from 'rxjs';

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
  public isRequestInCharge:boolean = false;
  public sendedIsClosed:boolean = false;
  public passwordRecIsClosed:boolean = false;
  public verifMessage:string = "We sent you an email to your adresse so you can verify your email adresse";
  public passwordChangeMessage:string = "Insert your email here, we gonna send you an email to change your password in it";

  constructor(private httpRequestService: HttpRequestService) {
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
    if (!this.memoryOfValidInputs.has(fieldName)) {
      this.memoryOfValidInputs.set(fieldName, control?.valid ? false : true)
    }
    if (control?.valid && !this.memoryOfValidInputs.get(fieldName)) {
      if (this.smileRadius <= 40) {
        this.smileRadius = this.smileRadius + 20;
        this.memoryOfValidInputs.set(fieldName, true)
      }
      switch (fieldName) {
        case 'email': {
          this.message = "Let's Go";
          this.messagecolor = 'rgb(2,212,149)';
          break;
        }
        case 'password': {
          this.message = "I swear i didn't saw anything !";
          this.messagecolor = 'rgb(2,212,149)';
          break;
        }
      }
    } else if (!control?.valid && this.memoryOfValidInputs.get(fieldName)) {
      if (this.smileRadius > 0) {
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

  handleData(event:boolean){
    this.sendedIsClosed = event;
  }

  handleDataRec(event:boolean){
    this.passwordRecIsClosed = event;
  }

  openRecovery(){
    this.passwordRecIsClosed = this.passwordRecIsClosed ? false : true
  }

  onSubmit(event: any) {
    this.isRequestInCharge = true;
    this.isInputsValid(event);
    if (this.loginForm.valid) {
      const json = {
        "email": this.loginForm.controls['email'].value,
        "password": this.loginForm.controls['password'].value,
      };

      this.httpRequestService.sendPostRequest('public/auth/login', json, '').pipe(
        finalize(() => {
          this.isRequestInCharge = false;
        })
      ).subscribe(
        data=>{
          this.message = "You are logged in Enjoy !";
          console.log(data)
          this.messagecolor = '#02D495';
        },
        error=>{
          console.log(error);
          if(error.error.error == 'User is disabled'){
            this.message = 'Your account is not verified please verify your email !'
            this.sendedIsClosed = true;
          }else{
            this.message = error.error.error;
          }
          this.messagecolor = 'red';
        }
      )
    }
  }
}
