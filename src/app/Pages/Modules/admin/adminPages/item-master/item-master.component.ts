import { Component, OnInit } from '@angular/core';
import { DigiInventoryService } from 'src/app/digi-inventory.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.css']
})
export class ItemMasterComponent implements OnInit {
  categorylist:any;
  categoryid:any;
  itemNumber:any;
  itemName:any;
  unit:any;
  make:any;
  description:any;
  price:any;
  partNo:any;
  id:any;
  list:any;

  constructor(private DigiInventoryService:DigiInventoryService,private ActivatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetItemMaster();
      }
      else{
        
      }
    })
    this.GetCategoryMaster();
    this.categoryid="0";
  }

   public GetItemMaster(){
    this.DigiInventoryService.GetItemMaster().subscribe(
      data=>{
        this.list=data;
        this.list=this.list.filter((x: { id: any; })=>x.id==Number(this.id));
        this.categoryid=this.list[0].categoryID,
        this.itemNumber=this.list[0].itemNumber,
        this.itemName=this.list[0].itemName,
        this.unit=this.list[0].unit,
        this.make=this.list[0].make,
        this.description=this.list[0].description,
        this.price=this.list[0].price
        this.GetCategoryMaster();
      }
    )
   }





  public GetCategoryMaster(){
    this.DigiInventoryService.GetCategoryMaster().subscribe(
      data=>{
        this.categorylist=data;
      }
    )
  }

  GetCategortID(event:any){
    this.categoryid=event.target.value;
  }



  
  public insertdetails(){
    var entity={
     "CategoryID":this.categoryid,
     "ItemNumber":this.itemNumber,
     "ItemName":this.itemName,
     "Unit":this.unit,
     "Make":this.make,
     "Description":this.description,
     "Price":this.price
    }
    this.DigiInventoryService.InsertItemMaster(entity).subscribe(
      data=>{
        alert("Saved Sucessfully");
        location.href="#/Admin/ItemDashboard/";
      }
    )
  }

  public updatedetails(){
    var entity={
      "ID":this.id,
      "CategoryID":this.categoryid,
      "ItemNumber":this.itemNumber,
      "ItemName":this.itemName,
      "Unit":this.unit,
      "Make":this.make,
      "Description":this.description,
      "Price":this.price
     }
     this.DigiInventoryService.UpdateItemMaster(entity).subscribe(
      data=>{
        alert("Updated Sucessfully");
        location.href="#/Admin/ItemDashboard";
      }
     )
  }

}
