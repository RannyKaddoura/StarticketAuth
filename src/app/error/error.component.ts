import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {


  constructor( private router:Router ) {
   }

  ngOnInit() {
  }

  Loginagain() {
    this.router.navigate(['/login']);
  }
}
