import { Component, OnInit } from '@angular/core';
import { DigiInventoryService } from '../digi-inventory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {
  vendorid:any;
  vendorlist:any;
  password:any;
  userName:any;
  id:any;
  list:any;


  constructor(private DigiInventoryService:DigiInventoryService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetVendorDetails();
      }
      else{
        
      }
    })
    this.GetVendorMaster();
    this.vendorid="0";
  }

   public GetVendorDetails(){
    this.DigiInventoryService.GetVendorDetails().subscribe(
      data=>{
        this.list=data;
        this.list=data.filter((x: { id: any; })=>x.id==Number(this.id));
        this.vendorid=data[0].vendorID,
        this.userName=data[0].userName,
        this.password=data[0].password
        this.GetVendorMaster();
      }
    )
   }





  public GetVendorMaster(){
    this.DigiInventoryService.GetVendorMaster().subscribe(
      data=>{
        this.vendorlist=data;
      }
    )
  }

  GetVendorID(event:any){
    this.vendorid=event.target.value;
  }

  public insertdetails(){
    var entity={
      "VendorID":this.vendorid,
      "UserName":this.userName,
      "Password":this.password 
     }
     this.DigiInventoryService.InsertVendorDetails(entity).subscribe(
      data=>{
        location.href="#/Admin/VendorLoginDashboard";
        alert("Saved Sucessfully");
      }
     )
  }

  public updatedetails(){
    var entity={
      "ID":this.id,
      "VendorID":this.vendorid,
      "UserName":this.userName,
      "Password":this.password 
     }
     this.DigiInventoryService.UpdateVendorDetails(entity).subscribe(
      data=>{
        alert("Updated Sucessfully");
        location.href="#/Admin/VendorLoginDashboard";
      }
     )
  }

}
