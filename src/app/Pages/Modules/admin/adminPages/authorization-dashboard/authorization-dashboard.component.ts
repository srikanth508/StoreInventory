import { Component, OnInit } from '@angular/core';
import { DigiInventoryService } from 'src/app/digi-inventory.service'; 

@Component({
  selector: 'app-authorization-dashboard',
  templateUrl: './authorization-dashboard.component.html',
  styleUrls: ['./authorization-dashboard.component.css']
})
export class AuthorizationDashboardComponent implements OnInit {
  authorizationlist:any;

  constructor(private DigiInventoryService:DigiInventoryService) { }
  ngOnInit(): void {
    this.GetAuthorizationMaster();
  }

   public GetAuthorizationMaster(){
    this.DigiInventoryService.GetAuthorizationMaster().subscribe(
      data=>{
        this.authorizationlist=data;
      }
    )
   }

   edit(id:any){
    location.href="#/Admin/AuthorizationMaster/" + id;
   }


   delete(id:any){
    this.DigiInventoryService.DeleteAuthorizationMaster(id).subscribe(
      data=>{
        alert("Deleted Sucessfully");
        this.GetAuthorizationMaster();
      }
    )

  }

}
