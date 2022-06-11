import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  roleID: any;

  ngOnInit(): void {
  }

  getRoleID(even: any) {
    this.roleID = even.target.value;
  }



  login() {
    localStorage.setItem('RoleID', this.roleID)
    localStorage.setItem('temp','1');
    location.href="#/Admin"
  }
}
