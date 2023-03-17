import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  
  protected userCredintiels: { userEmail: String; userPassword: String } = {
    userEmail: '',
    userPassword: '',
  };
  
}
