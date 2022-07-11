import { Component, OnInit } from '@angular/core';
import { DigiInventoryService } from 'src/app/digi-inventory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-master',
  templateUrl: './vendor-master.component.html',
  styleUrls: ['./vendor-master.component.css']
})
export class VendorMasterComponent implements OnInit {
  vendorName:any;
  vendorContactPersonName:any;
  vendorContactPersonNumber:any;
  emailID:any;
  faxNumber:any;
  address:any;
  id:any;
  list:any;

  constructor(private DigiInventoryService:DigiInventoryService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetVendorMaster();
      }
      else{
        
      }
    })
  }

  public GetVendorMaster(){
    this.DigiInventoryService.GetVendorMaster().subscribe(
      data=>{
        this.list=data;
        this.list=this.list.filter((x: { id: any; })=>x.id==Number(this.id))
        this.vendorName=this.list[0].vendorName,
        this.vendorContactPersonName=this.list[0].vendorContactPersonName,
        this.vendorContactPersonNumber=this.list[0].vendorContactPersonNumber,
        this.emailID=this.list[0].emailID,
        this.faxNumber=this.list[0].faxNumber,
        this.address=this.list[0].address
      }
    )
  }

  


  public insertdetails(){
    debugger
    var entity={
      "VendorName":this.vendorName,
      "VendorContactPersonName":this.vendorContactPersonName,
      "VendorContactPersonNumber":this.vendorContactPersonNumber,
      "EmailID":this.emailID,
      "FaxNumber":this.faxNumber,
      "Address":this.address
    }
    this.DigiInventoryService.InsertVendorMaster(entity).subscribe(
      data=>{
        alert("Saved Sucessfully");
        location.href="#/Admin/VendorDashboard";
        console.log("List",data);
      }
    )
  }


  public updatedetails(){
    var entity={
      "ID":this.id,
      "VendorName":this.vendorName,
      "VendorContactPersonName":this.vendorContactPersonName,
      "VendorContactPersonNumber":this.vendorContactPersonNumber,
      "EmailID":this.emailID,
      "FaxNumber":this.faxNumber,
      "Address":this.address
    }
    this.DigiInventoryService.UpdateVendorMaster(entity).subscribe(
      data=>{
        alert("Updated Sucessfully");
        location.href="#/Admin/VendorDashboard";
      }
    )
  }

}
