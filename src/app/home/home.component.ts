import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'angular5-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profile: any;

  constructor(
    private router: Router,
     private userService: UserService,
     private cookieService: CookieService
    ) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe((data: any) => {
      this.profile = data;

    });
  }

  Logout() {
    // localStorage.removeItem('userToken');
    
    this.cookieService.delete('StarticketAuth');
    // this.cookieService.delete('StarticketAuth', '/', '.starticket.org');
    this.cookieService.deleteAll();

    // this.cookieService.delete('StarticketAuth', '/', 'api.starticket.org');
    // this.cookieService.delete('G_ENABLED_IDPS', '/', 'api.starticket.org');
    // this.cookieService.delete('G_ENABLED_IDPS', '/', 'starticket.org');
    // this.cookieService.delete('G_AUTHUSER_H', '/', 'api.starticket.org');

    this.router.navigate(['/login']);
  }

}