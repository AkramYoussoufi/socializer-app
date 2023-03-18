import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  protected userCredintiels: { firstName: '', lastName:'', userName:'', userEmail: String; userPassword: String } = {
    firstName: '',
    lastName: '',
    userName: '',
    userEmail: '',
    userPassword: '',
  };

}
