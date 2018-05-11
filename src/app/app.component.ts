
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
 
  constructor( private cookieService: CookieService ) { }
 
  ngOnInit(): void {
    this.cookieService.set( 'Test', 'HelloCookie' );
    this.cookieValue = this.cookieService.get('Tests');
  }

}



