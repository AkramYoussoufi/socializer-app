import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { PlatformComponent } from '../platform.component';



const routes: Routes = [
  { path: 'app', component: PlatformComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PlatformrouteModule { }
