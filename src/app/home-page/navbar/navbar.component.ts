import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user = localStorage.getItem('userSocial');
  constructor() { }

  ngOnInit() {
    console.log(this.user);
    
  }

}
