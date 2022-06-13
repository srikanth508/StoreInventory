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
    if (this.roleID == 1) {
      localStorage.setItem('RoleID', this.roleID)
      localStorage.setItem('temp', '1');
      location.href = "#/Admin"
    }
    else if (this.roleID == 2) {
      localStorage.setItem('RoleID', this.roleID)
      localStorage.setItem('temp', '1');
      location.href = "#/projectCordinator"
    }
    else if (this.roleID == 3) {
      localStorage.setItem('RoleID', this.roleID)
      localStorage.setItem('temp', '1');
      location.href = "#/projectCordinator"
    }
  }
}
