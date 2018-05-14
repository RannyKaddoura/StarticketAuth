import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { CookieService } from 'ngx-cookie-service';

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
    localStorage.removeItem('userToken');
    this.cookieService.deleteAll('/','StarticketAuth');
    this.router.navigate(['/login']);
  }

}