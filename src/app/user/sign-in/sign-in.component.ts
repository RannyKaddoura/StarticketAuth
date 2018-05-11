import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {LocalStorage, SessionStorage, LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angular5-social-login';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(
    private userService : UserService,
    private router : Router,
    private socialAuthService: AuthService
  ) { }

  ngOnInit() {
  }

  public socialSignIn(socialPlatform : string) {

    console.log(socialPlatform+" sign in data click");
    let socialPlatformProvider;
    if(socialPlatform === "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    // else if(socialPlatform === "facebook"){
    //   socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    // }
    
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+" sign in data : " , userData);
        let response = this.userService.userAuthenticationOAuth(socialPlatform, userData.token).subscribe((data : any)=>{
          this.router.navigate(['/home']);
        },
        (err : HttpErrorResponse)=>{
          this.isLoginError = true;
        });

      }
    );
  }


  OnSubmit(userName,password){
     this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
      localStorage.setItem('userToken',data.access_token);
      this.router.navigate(['/home']);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }

}
