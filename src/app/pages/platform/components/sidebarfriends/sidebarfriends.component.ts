import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebarfriends',
  templateUrl: './sidebarfriends.component.html',
  styleUrls: ['./sidebarfriends.component.scss']
})
export class SidebarfriendsComponent {
  currentPage:number = 1;
  tempArray:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

  onChangeUp(){
    if(this.currentPage > 1){
      this.currentPage--;
    }
  }

  onChangeDown(){
    if(Math.ceil(this.tempArray.length/9)!=this.currentPage){
      this.currentPage++;
    }
  }
}
