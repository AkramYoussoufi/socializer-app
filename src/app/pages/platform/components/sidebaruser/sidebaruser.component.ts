import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebaruser',
  templateUrl: './sidebaruser.component.html',
  styleUrls: ['./sidebaruser.component.scss']
})
export class SidebaruserComponent {

  isRequesting:boolean = false;

  isRequestingSwitch(){
    this.isRequesting = !this.isRequesting
    console.log("asda")
  }

  switchingFromChild(requesting:boolean){
    this.isRequesting = requesting;
  }
}
