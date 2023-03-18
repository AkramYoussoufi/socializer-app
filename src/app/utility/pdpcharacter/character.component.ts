import { Component } from '@angular/core';
import { MousepositionService } from '../../service/mouseposition.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {


  constructor(public mousepositionService:MousepositionService){
  }


}
