import { Component, OnInit } from '@angular/core';
import { DigiInventoryService } from '../digi-inventory.service';


@Component({
  selector: 'app-authorization-login-dashboard',
  templateUrl: './authorization-login-dashboard.component.html',
  styleUrls: ['./authorization-login-dashboard.component.css']
})
export class AuthorizationLoginDashboardComponent implements OnInit {
  authorizationlist:any;

  constructor(private DigiInventoryService:DigiInventoryService) { }

  ngOnInit(): void {
    this.GetAuthorizationDetails();
  }

  public GetAuthorizationDetails(){
    this.DigiInventoryService.GetAuthorizationDetails().subscribe(
      data=>{
        this.authorizationlist=data;
      }
    )
  }

  edit(id:any){
    location.href="#/Admin/AuthorizationDetails/"+ id;
  }

  delete(id:any){
    this.DigiInventoryService.DeleteAuthorizationDetails(id).subscribe(
      data=>{
        this.GetAuthorizationDetails();
      }
    )
  }

}
