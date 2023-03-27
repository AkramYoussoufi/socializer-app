import { Component, Input, ElementRef , QueryList, ViewChildren, EventEmitter, Output } from '@angular/core';
import { HttpRequestService } from 'src/app/service/http-request.service';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.scss']
})
export class VerifyemailComponent {

  @Input() public email: string = '';
  @Input() public message: string = '';
  @Input() public isClosed: boolean = true;
  @ViewChildren('inputPin') inputPins: QueryList<ElementRef> = new QueryList<ElementRef>();
  public isCharged:boolean = false;
  public messageColor:string = '#A8A3A3';
  styleInputObject = {'box-shadow': 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px','border':''}
  borerStyle = [this.styleInputObject,this.styleInputObject,this.styleInputObject,this.styleInputObject,this.styleInputObject];
  public pin: string[] = ['', '', '', ''];  
  @Output() public dataEmiter: EventEmitter<boolean> = new EventEmitter<boolean>();
  
    constructor(private httpRequestService:HttpRequestService, private router:Router){

    }


  public handleInput(event:any,index:number){
   const inputValue = event.target.value;
   if(event.inputType === 'deleteContentBackward' && inputValue.length == 0 && index != 0){
    this.borerStyle[index] = {'box-shadow': 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
,'border':''};
    this.inputPins.toArray()[index-2].nativeElement.focus();
  }
   if (inputValue.length >= 1){
    this.borerStyle[index] = {
      'box-shadow':'',
      'border':'solid 2px #02D495'
    };
    if(index != 4){
      this.inputPins.toArray()[index].nativeElement.focus();
    }
    this.pin[index] = inputValue.charAt(0);
   }
  }

  onSubmit(){
    this.isCharged = true;
    this.message = '';
    this.messageColor = "#02D495"

    const json = {
      'email':this.email,
      'pin':this.pin[1]+this.pin[2]+this.pin[3]+this.pin[4]
    }
    this.httpRequestService.sendPostRequest('public/verifying-email', json, '').pipe(
      finalize(() => {

      })
    ).subscribe(
      data=>{
        this.isCharged = false;
        this.message = data.message;
        this.messageColor = "#02D495"
        setTimeout(()=>{this.isClosedSwitch},1900)
        setTimeout(()=>{this.router.navigate([''])},2000)
      },
      error=>{
        this.isCharged = false;
        this.messageColor = "red"
        this.message = error.error.error;
      }
      )
  }

  reSendPin(){
    this.isCharged = true;
    this.message = '';
    this.messageColor = "#02D495"

    const json = {
      'email':this.email,
    }
    this.httpRequestService.sendPostRequest('public/send/mail/verification', json, '').pipe(
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
