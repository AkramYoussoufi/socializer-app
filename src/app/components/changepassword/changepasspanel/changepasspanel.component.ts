import { Component } from '@angular/core';
import { HttpRequestService } from 'src/app/service/http-request.service';
import { Router,ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-changepasspanel',
  templateUrl: './changepasspanel.component.html',
  styleUrls: ['./changepasspanel.component.scss']
})
export class ChangepasspanelComponent {
  public isCharged:boolean = false;
  public message:string = 'Hello Again you can change your password below !';
  public messageColor:string = '#A8A3A3';
  public passowrd:string = '';
  public repassword:string = '';
  public token:string = '';
  
    constructor(private httpRequestService:HttpRequestService, private router:Router,private routeActivate: ActivatedRoute){
       this.routeActivate.params.subscribe(params=>this.token=params['token'])
    }


  onSubmit(){
    this.isCharged = true;
    this.message = '';
    this.messageColor = "#02D495";
    console.log((this.passowrd != this.repassword) || this.passowrd.length < 8)
    if((this.passowrd != this.repassword) || this.passowrd.length < 8){ 
      setTimeout(()=>{
        this.isCharged = false;
        this.message = 'please make sure your password is correct and has >8 in length';
        this.messageColor = "red";
      },1500)
    }else{
      const json = {
        'recoveryToken':this.token,
        'password':this.passowrd,
      }
      
      this.httpRequestService.sendPostRequest('public/verify/password-recovery-token', json, '').pipe(
        finalize(() => {
          this.isCharged = false;
          if(this.messageColor == "#02D495"){
            setTimeout(()=>{
              this.router.navigate([''])
            },1500)
          }
        })
      ).subscribe(
        data=>{
          this.message = data.message;
          this.messageColor = "#02D495";
        },
        error=>{
          this.messageColor = "red"
          this.message = error.error.error;
        }
        )
    }

    
  }
}
