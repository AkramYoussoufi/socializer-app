import { Component } from '@angular/core';
import { MousepositionService } from './service/mouseposition.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private mousepositionService:MousepositionService){
    
  }


  protected onMouseMove(event:MouseEvent){
    this.mousepositionService.setMousePosition(event.clientX,event.clientY)
    console.log("hi "+event.clientX+event.clientY);
  }

}
