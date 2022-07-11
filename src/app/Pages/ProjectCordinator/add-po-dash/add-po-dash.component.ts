import { Component, OnInit } from '@angular/core';
import { DigiInventoryService } from 'src/app/digi-inventory.service';

@Component({
  selector: 'app-add-po-dash',
  templateUrl: './add-po-dash.component.html',
  styleUrls: ['./add-po-dash.component.css']
})
export class AddPoDashComponent implements OnInit {

  projectlist:any;

  constructor(private DigiInventoryService:DigiInventoryService) { }

  ngOnInit(): void {
    this.GetPurchaseOrder();
  }

  public GetPurchaseOrder(){
    this.DigiInventoryService.GetPurchaseOrder().subscribe(
      data=>{
        this.projectlist=data;
      }
    )
  }

}
