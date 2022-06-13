import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  RoleID:any;
  
  constructor() { }

  ngOnInit(): void {
     this.RoleID=localStorage.getItem('RoleID')
  }

  logout() {
    location.href = "#/login";
    localStorage.clear();
    
    location.reload();
  }
}
