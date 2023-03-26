import { Component, Input, ElementRef , QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['./verifyemail.component.scss']
})
export class VerifyemailComponent {

  @Input() email: string = '';
  @Input() message: string = 'We sent you an email to your adresse so you can verify your email adresse';
  @ViewChildren('inputPin') inputPins: QueryList<ElementRef> = new QueryList<ElementRef>();
  styleInputObject = {'box-shadow': 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px','border':''}
  borerStyle = [this.styleInputObject,this.styleInputObject,this.styleInputObject,this.styleInputObject,this.styleInputObject];
  public pin: String[] = ['', '', '', ''];  

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
}
