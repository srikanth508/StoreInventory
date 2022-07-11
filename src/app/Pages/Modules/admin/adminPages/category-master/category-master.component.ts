import { Component, OnInit } from '@angular/core';
import { DigiInventoryService } from 'src/app/digi-inventory.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-category-master',
  templateUrl: './category-master.component.html',
  styleUrls: ['./category-master.component.css']
})
export class CategoryMasterComponent implements OnInit {
  categoryCode:any;
  categoryName:any;
  description:any;
  id:any;
  list:any;

  constructor(private DigiInventoryService:DigiInventoryService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetCategoryMaster();
      }
      else{
        
      }
    })
    this.GetCategoryMaster();
  }

  public GetCategoryMaster(){
    this.DigiInventoryService.GetCategoryMaster().subscribe(
      data=>{
        this.list=data;
        this.list=this.list.filter((x: { id: any; })=>x.id==Number(this.id));
        this.categoryCode=this.list[0].categoryCode,
        this.categoryName=this.list[0].categoryName,
        this.description=this.list[0].description
      }
    )
  }

  public insertdetails(){
    debugger
    var entity={
      "CategoryCode":this.categoryCode,
      "CategoryName":this.categoryName,
      "Description":this.description
    }
    this.DigiInventoryService.InsertCategoryMaster(entity).subscribe(
      data=>{
         alert("Saved Succesfully");   
         location.href="#/Admin/CategoryDashboard";
      }
    )
  }

  public updatedetails(){
    var entity={
      "ID":this.id,
      "CategoryCode":this.categoryCode,
      "CategoryName":this.categoryName,
      "Description":this.description
    }
    this.DigiInventoryService.UpdateCategoryMaster(entity).subscribe(
      data=>{
        location.href="#/Admin/CategoryDashboard";    
        alert("Updated Sucessfully");  
      }
    )
  }

}
