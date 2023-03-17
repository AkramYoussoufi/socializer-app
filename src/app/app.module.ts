import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './approuting.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CharacterComponent } from './pdpcharacter/character.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, CharacterComponent, SignupComponent],
  imports: [BrowserModule, FormsModule,AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
