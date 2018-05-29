import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable()
export class UserService {
  readonly rootUrl = 'http://api.starticket.org';
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  registerUser(user: User) {
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email,
      FirstName: user.FirstName,
      LastName: user.LastName
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/auth//api/User/Register', body,{headers : reqHeader});
  }

  userAuthentication(userName, password) {
    var data = { "email": userName, "password": password };
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','No-Auth':'True' });
    return this.http.post(this.rootUrl + '/auth/en/login/email', JSON.stringify(data), { headers: reqHeader, withCredentials: true });
  }

  userAuthenticationOAuth(method, token) {
    console.log(method+" oauth sign in data : ", token);

    var data = { "token": token};
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','No-Auth':'True' });
    return this.http.post(this.rootUrl + '/auth/en/register/'+ method, JSON.stringify(data), { headers: reqHeader, withCredentials: true });
  }

  getUserProfile(){
   return  this.http.get(this.rootUrl+'/auth/en/profile', { withCredentials: true });
  }

  logout(){
    this.http.get(this.rootUrl+'/auth/en/logout', { withCredentials: true }).subscribe
    (data => {
      console.log('Logout Clicked');
      console.log(data);
      this.router.navigate(['/login']);
    })
  }
}