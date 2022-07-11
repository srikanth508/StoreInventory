import { Component, OnInit } from '@angular/core';
import { DigiInventoryService } from 'src/app/digi-inventory.service';

@Component({
  selector: 'app-item-dashboard',
  templateUrl: './item-dashboard.component.html',
  styleUrls: ['./item-dashboard.component.css']
})
export class ItemDashboardComponent implements OnInit {

  itemlist:any;
  categorylist:any;
  categoryid:any;
  dumplist:any;

  constructor(private DigiInventoryService:DigiInventoryService) { }

  ngOnInit(): void {
   this.GetItemMaster();
   this.GetCategoryMaster();
  }

 public GetItemMaster(){
  this.DigiInventoryService.GetItemMaster().subscribe(
    data=>{
      this.itemlist=data;
      this.dumplist=data;
    }
  )
  this.categoryid="0";
 }

 edit(id:any){
   location.href="#/Admin/ItemMaster/" + id;
 }

 delete(id:any){
  this.DigiInventoryService.DeleteItemMaster(id).subscribe(
    data=>{
      this.GetItemMaster();
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

 GetCategoryID(event:any){
    this.categoryid=event.target.value;
    if(this.categoryid==0){
      this.GetItemMaster();
    }
    else{
      this.itemlist=this.dumplist.filter((x : {  categoryID: any; }) => x.categoryID == this.categoryid);
    }
  
 
 }



}




