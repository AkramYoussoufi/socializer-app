import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-pendignrequest',
  templateUrl: './pendignrequest.component.html',
  styleUrls: ['./pendignrequest.component.scss']
})
export class PendignrequestComponent {

  @Output() messageRequesting = new EventEmitter<boolean>();

  isRequestingSwitch(){
    this.messageRequesting.emit(false);
  }
}
