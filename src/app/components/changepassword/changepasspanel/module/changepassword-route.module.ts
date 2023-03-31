import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChangepasspanelComponent } from '../changepasspanel.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule  } from '@angular/forms';

const routes:Routes = [
  {path:'changepassword/:token', component:ChangepasspanelComponent}
]

@NgModule({
  declarations: [ChangepasspanelComponent],
  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
    FormsModule
  ],
  exports : [RouterModule ],
})
export class ChangepasswordModule { }
