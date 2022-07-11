import { Component, OnInit } from '@angular/core';
import { DigiInventoryService } from '../digi-inventory.service';

@Component({
  selector: 'app-vendor-login-dashboard',
  templateUrl: './vendor-login-dashboard.component.html',
  styleUrls: ['./vendor-login-dashboard.component.css']
})
export class VendorLoginDashboardComponent implements OnInit {
  vendorlist:any;

  constructor(private DigiInventoryService:DigiInventoryService) { }

  ngOnInit(): void {
    this.GetVendorDetails();
  }

  public GetVendorDetails(){
    this.DigiInventoryService.GetVendorDetails().subscribe(
      data=>{
        this.vendorlist=data;
      }
    )
  }


  edit(id:any){
    location.href="#/Admin/VendorDetails/"+ id;
  }
}
