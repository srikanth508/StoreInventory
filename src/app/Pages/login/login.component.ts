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
    debugger
    this.roleID = even.target.value;
  }



  login() {
    if (this.roleID == 1) {
      
      localStorage.setItem('RoleID', this.roleID)
      sessionStorage.setItem('temp', '1');
      location.href = "#/projectCordinator/Storedash"
      setTimeout(()=>{
        window.location.reload();
      },1000)
     
    }
    else if (this.roleID == 2) {
      localStorage.setItem('RoleID', this.roleID)
      sessionStorage.setItem('temp', '1');
      location.href = "#/projectCordinator/PurchasemanagerDash"
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
      location.href = "#/projectCordinator/Storedash"
      setTimeout(()=>{
        window.location.reload();
      },1000)
    }
    else if (this.roleID == 6) {
      localStorage.setItem('RoleID', this.roleID)
      sessionStorage.setItem('temp', '1');
      location.href = "#/projectCordinator/Storedash"
      setTimeout(()=>{
        window.location.reload();
      },1000)
    }
  }
}
