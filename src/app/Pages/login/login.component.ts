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
      sessionStorage.setItem('temp', '1');
      location.href = "#/Admin"
      setTimeout(()=>{
        window.location.reload();
      },1000)
     
    }
    else if (this.roleID == 2) {
      localStorage.setItem('RoleID', this.roleID)
      sessionStorage.setItem('temp', '1');
      location.href = "#/projectCordinator"
      setTimeout(()=>{
        window.location.reload();
      },1000)
    }
    else if (this.roleID == 3) {
      localStorage.setItem('RoleID', this.roleID)
      sessionStorage.setItem('temp', '1');
      location.href = "#/projectCordinator/ApproveProject"
      setTimeout(()=>{
        window.location.reload();
      },1000)
    }
    else if (this.roleID == 4) {
      localStorage.setItem('RoleID', this.roleID)
      sessionStorage.setItem('temp', '1');
      location.href = "#/projectCordinator/AddPoDash"
      setTimeout(()=>{
        window.location.reload();
      },1000)
    }
    else if (this.roleID == 6) {
      localStorage.setItem('RoleID', this.roleID)
      sessionStorage.setItem('temp', '1');
      location.href = "#/ProjectManager/ProjectMenu"
      setTimeout(()=>{
        window.location.reload();
      },1000)
    }
  }
}
