import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './module/approuting.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CharacterComponent } from './components/pdpcharacter/character.component';
import { SignupComponent } from './pages/signup/signup.component';
import { VerifyemailComponent } from './components/verifyemail/verifyemail.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { ChangepasspanelComponent } from './components/changepassword/changepasspanel/changepasspanel.component';
import { ChangepasswordModule } from './components/changepassword/changepasspanel/module/changepassword-route.module';

@NgModule({
  declarations: [AppComponent, LoginComponent, CharacterComponent, SignupComponent, VerifyemailComponent, ChangepasswordComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, HttpClientModule,ChangepasswordModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
