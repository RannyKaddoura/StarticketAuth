import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profile: any;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe((data: any) => {
      this.profile = data;

    });
  }

  Logout() {
    localStorage.removeItem('userToken');
    Cookie.deleteAll();
    this.router.navigate(['/login']);
  }

}