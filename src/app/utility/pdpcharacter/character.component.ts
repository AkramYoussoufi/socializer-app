import { Component, Input } from '@angular/core';
import { MousepositionService } from '../../service/mouseposition.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  @Input() eyeHeigth: string = '20px';

  constructor(public mousepositionService: MousepositionService) {
  }


}
