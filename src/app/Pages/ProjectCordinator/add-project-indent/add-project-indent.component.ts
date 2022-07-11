import { Component, OnInit } from '@angular/core';
import { DigiInventoryService } from 'src/app/digi-inventory.service';
import { SharedModule } from '../../Modules/shared/shared.module';

@Component({
  selector: 'app-add-project-indent',
  templateUrl: './add-project-indent.component.html',
  styleUrls: ['./add-project-indent.component.css']
})
export class AddProjectIndentComponent implements OnInit {
  showdashboard:any;
  projectlist:any;
  projectid:any;
  categorylist:any;
  categoryid:any;
  requisitionNumber:any;
  referenceNumber:any;
  jobReferenceNumber:any;
  date:any;
  generalTerms:any;
  itemlist:any;

  
  constructor(private DigiInventoryService:DigiInventoryService) { }

  ngOnInit(): void {
    this.GetItemMaster();
    this.GetProjectCreationMaster();
    this.GetCategoryMaster();
    this.projectid="0",
    this.categoryid="0";
  }


 public GetProjectCreationMaster(){
  this.DigiInventoryService.GetProjectCreationMaster().subscribe(
    data=>{
      this.projectlist=data;
    }
  )
 }

 GetProjectID(event:any){
  this.projectid=event.target.value;
 }


 public GetCategoryMaster(){
  this.DigiInventoryService.GetCategoryMaster().subscribe(
    data=>{
      this.categorylist=data;
    }
  )
 }

 GetcategoryID(event:any){
  this.categoryid=event.target.value;
 }

  showdash()
  {
    this.showdashboard=1
  }


  public insertdetails(){
    var entity={
      "ProjectID":this.projectid,
      "RequisitionNumber":this.requisitionNumber,
      "ReferenceNumber":this.referenceNumber,
      "JobReferenceNumber":this.jobReferenceNumber,
      "Date":this.date,
      "GeneralTerms":this.generalTerms,
    }
    this.DigiInventoryService.InsertPurchaseOrder(entity).subscribe(
      data=>{
        location.href="#/projectCordinator";
        alert("Saved Sucessfully");
      }
    )
  }

  public GetItemMaster(){
    this.DigiInventoryService.GetItemMaster().subscribe(
      data=>{
         this.itemlist=data;
      }
    )
  }

}
