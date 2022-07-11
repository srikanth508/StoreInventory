import { Component, OnInit } from '@angular/core';
import { DigiInventoryService } from 'src/app/digi-inventory.service';

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {
  vendorlist:any;

  constructor(private DigiInventoryService:DigiInventoryService) { }

  ngOnInit(): void {
    this.GetVendorMaster();
  }
  public GetVendorMaster(){
    this.DigiInventoryService.GetVendorMaster().subscribe(
      data=>{
        this.vendorlist=data;
      }
    )
  }
 
  edit(id:any){
    location.href="#/Admin/VendorMaster/" + id;
  }


  delete(id:any){
   this.DigiInventoryService.DeleteVendorMaster(id).subscribe(
    data=>{
      alert("Deleted Sucessfully");
      this.GetVendorMaster();
    }
   )

  }


}
