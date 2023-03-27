import { Component, Input, ElementRef , QueryList, ViewChildren, EventEmitter, Output } from '@angular/core';
import { HttpRequestService } from 'src/app/service/http-request.service';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent {

  public email: string = '';
  @Input() public message: string = '';
  @Input() public isClosed: boolean = true;
  public isCharged:boolean = false;
  public messageColor:string = '#A8A3A3';
  @Output() public dataEmiter: EventEmitter<boolean> = new EventEmitter<boolean>();
  
    constructor(private httpRequestService:HttpRequestService, private router:Router){

    }


  onSubmit(){
    this.isCharged = true;
    this.message = '';
    this.messageColor = "#02D495"

    const json = {
      'email':this.email,
    }
    
    this.httpRequestService.sendPostRequest('public/recover-password', json, '').pipe(
      finalize(() => {

      })
    ).subscribe(
      data=>{
        this.isCharged = false;
        this.message = data.message;
        this.messageColor = "#02D495"
      },
      error=>{
        this.isCharged = false;
        this.messageColor = "red"
        this.message = error.error.error;
      }
      )
  }

  public isClosedSwitch(){
    this.isClosed = this.isClosed ? false : true;
    this.dataEmiter.emit(this.isClosed);
  }
  
}
