import { Component, OnInit } from '@angular/core';
import { DigiInventoryService } from 'src/app/digi-inventory.service';

@Component({
  selector: 'app-project-creation-dashboard',
  templateUrl: './project-creation-dashboard.component.html',
  styleUrls: ['./project-creation-dashboard.component.css']
})
export class ProjectCreationDashboardComponent implements OnInit {
  projectlist:any;

  constructor(private DigiInventoryService:DigiInventoryService) { }

  ngOnInit(): void {
     this.GetProjectCreationMaster();
  }

  public GetProjectCreationMaster(){
    this.DigiInventoryService.GetProjectCreationMaster().subscribe(
      data=>{
        this.projectlist=data;
      }
    )
  }

  edit(id:any){
    location.href="#/Admin/ProjectCreationMaster/" + id;
  }

  delete(id:any){
    this.DigiInventoryService.DeleteProjectCreationMaster(id).subscribe(
      data=>{
        this.GetProjectCreationMaster();
      }
    )
  }

}
