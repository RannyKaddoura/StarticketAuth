
import { Component, OnInit  } from '@angular/core';
import { environment } from '../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  cookieValue = 'UNKNOWN';
 
  constructor(
    private cookieService: CookieService
   ) { }
 
  ngOnInit(): void {
    //Check Cookies
    const IsCookieExists: boolean = this.cookieService.check('StarticketAuth');
      console.log('IsCookieExists : '+IsCookieExists);
    //Get Cookies
    this.cookieValue = this.cookieService.get('StarticketAuth');
      console.log('This cookieValue is : '+this.cookieValue);
    //Set cookies
    this.cookieService.set('StarticketAuth', 'UNKNOWN', 3, '/', '.starticket.org' );
      console.log('This cookieService now is : '+this.cookieService);
  
    
    // //Check Cookies
    // const IsCookieExists: boolean = this.cookieService.check('StarticketAuth');
    // //Get Cookies
    // const value: string = this.cookieService.get('StarticketAuth');
    // //Get all cookies
    // const allCookies: {} = this.cookieService.getAll();
    // //delete cookies
    // this.cookieService.delete('StarticketAuth');
    // //delete all cookies
    // this.cookieService.deleteAll();

  }

}



    // https://www.npmjs.com/package/ngx-cookie-service
    // const cookieExists: boolean = this.cookieService.check('StarticketAuth');
     
    // this.cookieService.set( 'StarticketAuth', 'UNKNOWN', 1, '/', 'starticket.org');
    // this.cookieValue = this.cookieService.get('StarticketAuth');
