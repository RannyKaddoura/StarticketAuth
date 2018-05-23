import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService
  ) {
    
   }

  ngOnInit() {
  }

  Logout() {
    this.userService.userLogout();
    // localStorage.removeItem('userToken');
    // this.authService.signOut();
    // this.googleLoginProvider.signOut();
    // this.cookieService.delete('StarticketAuth');
    // this.cookieService.delete('StarticketAuth', '/', '.starticket.org');
    // this.cookieService.deleteAll('/', '.starticket.org');
    // this.cookieService.delete('StarticketAuth', '/', 'api.starticket.org');
    this.router.navigate(['/login']);
  }

}
