import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './approuting.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CharacterComponent } from './utility/pdpcharacter/character.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, CharacterComponent, SignupComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
