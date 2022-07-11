import { Component, OnInit } from '@angular/core';
import { DigiInventoryService } from 'src/app/digi-inventory.service';

@Component({
  selector: 'app-category-dashboard',
  templateUrl: './category-dashboard.component.html',
  styleUrls: ['./category-dashboard.component.css']
})
export class CategoryDashboardComponent implements OnInit {
  categorylist:any;

  constructor(private DigiInventoryService:DigiInventoryService) { }

  ngOnInit(): void {
    
   this.GetCategoryMaster();
  }

  public GetCategoryMaster(){
    this.DigiInventoryService.GetCategoryMaster().subscribe(
      data=>{
        this.categorylist=data;
      }
    )
  }

  edit(id:any){
    location.href="#/Admin/CategoryMaster/" + id;
  }

  delete(id:any){
    this.DigiInventoryService.DeleteCategoryMaster(id).subscribe(
      data=>{
        this.GetCategoryMaster();
      }
    )
  }

}
