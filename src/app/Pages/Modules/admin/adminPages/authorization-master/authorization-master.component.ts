import { Component, OnInit } from '@angular/core';
import { DigiInventoryService } from 'src/app/digi-inventory.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-authorization-master',
  templateUrl: './authorization-master.component.html',
  styleUrls: ['./authorization-master.component.css']
})
export class AuthorizationMasterComponent implements OnInit {
  authorizationCode:any;
  authorizationName:any;
  depatment:any;
  emailID:any;
  phoneNumber:any;
  id:any

  constructor(private DigiInventoryService:DigiInventoryService,private ActivatedRoute:ActivatedRoute) { }
  list:any;
  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetAuthorizationMaster();
      }
      else{   
      }
    })
   this.GetAuthorizationMaster();
  }

   public GetAuthorizationMaster(){
    this.DigiInventoryService.GetAuthorizationMaster().subscribe(
      data=>{
        this.list=data;
        this.list=data.filter((x: { id: any; })=>x.id==Number(this.id));
        this.authorizationCode=this.list[0].authorizationCode,
        this.authorizationName=this.list[0].authorizationName,
        this.depatment=this.list[0].depatment,
        this.emailID=this.list[0].emailID,
        this.phoneNumber=this.list[0].phoneNumber
      }
    )
   } 



  public insertdetails(){
    var entity ={
      "AuthorizationCode":this.authorizationCode,
      "AuthorizationName":this.authorizationName,
      "Depatment":this.depatment,
      "EmailID":this.emailID,
      "PhoneNumber":this.phoneNumber,
    }
    this.DigiInventoryService.InsertAuthorizationMaster(entity).subscribe(
      data=>{
        location.href="#/Admin/AuthorizationDashboard";
        alert("Saved Sucssfully");
      }
    )
  }

  public updatedetails(){
    var entity ={
      "ID":this.id,
      "AuthorizationCode":this.authorizationCode,
      "AuthorizationName":this.authorizationName,
      "Depatment":this.depatment,
      "EmailID":this.emailID,
      "PhoneNumber":this.phoneNumber,
    }
    this.DigiInventoryService.UpdateAuthorizationMaster(entity).subscribe(
      data=>{
        alert("Updated Sucessfully")
        location.href="#/Admin/AuthorizationDashboard";
      }
    )
  }







}





