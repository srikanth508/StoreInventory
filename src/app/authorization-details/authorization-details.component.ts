import { Component, OnInit } from '@angular/core';
import { DigiInventoryService } from '../digi-inventory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-authorization-details',
  templateUrl: './authorization-details.component.html',
  styleUrls: ['./authorization-details.component.css']
})
export class AuthorizationDetailsComponent implements OnInit {
  Authorizationlist:any;
  authorizationid:any;
  userName:any;
  password:any;
  id:any;
  list:any;

  constructor(private DigiInventoryService:DigiInventoryService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetAuthorizationDetails();
      }
      else{   
      }
    })

    this.GetAuthorizationMaster();
    this.authorizationid="0";
  }

  public GetAuthorizationDetails(){
    this.DigiInventoryService.GetAuthorizationDetails().subscribe(
      data=>{
        this.list=data;
        this.list=data.filter((x: { id: any; })=>x.id==Number(this.id));
        this.authorizationid=data[0].authorizationID,
        this.userName=data[0].userName,
        this.password=data[0].password
        this.GetAuthorizationMaster()
      }
    )
  }

  public GetAuthorizationMaster(){
    this.DigiInventoryService.GetAuthorizationMaster().subscribe(
      data=>{
        this.Authorizationlist=data;
      }
    )
  }

GetAuthorizationID(event:any){
  this.authorizationid=event.target.value;
}

  public insertdetails(){
    var entity={
      "AuthorizationID":this.authorizationid,
      "UserName":this.userName,
      "password":this.password,
    }
    this.DigiInventoryService.InsertAuthorizationDetails(entity).subscribe(
      data=>{
        alert("Saved Sucessfully");
        location.href="#/Admin/AuthorizationLoginDashboard/";
      }
    )

  }

  public updatedetails(){
    var entity={
      "ID":this.id,
      "AuthorizationID":this.authorizationid,
      "UserName":this.userName,
      "password":this.password,
    }
    this.DigiInventoryService.UpdateAuthorizationDetails(entity).subscribe(
      data=>{
          alert("Updated Sucessfully");
          location.href="#/Admin/AuthorizationLoginDashboard";
      }
    )
  }


}
