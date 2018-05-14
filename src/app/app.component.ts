
import { Component, OnInit  } from '@angular/core';
import { environment } from '../environments/environment';

import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
 
  constructor( ) { }
 
  ngOnInit() {
    
  }

}



