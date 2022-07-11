import { Component, OnInit } from '@angular/core';
import { DigiInventoryService } from 'src/app/digi-inventory.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-creation-master',
  templateUrl: './project-creation-master.component.html',
  styleUrls: ['./project-creation-master.component.css']
})
export class ProjectCreationMasterComponent implements OnInit {
  projectNumber: any;
  projectName: any;
  clientName: any;
  description: any;
  id: any;
  list: any;

  constructor(private DigiInventoryService: DigiInventoryService, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetProjectCreationMaster();
      }
      else {

      }
    })
  }


  public GetProjectCreationMaster() {
    this.DigiInventoryService.GetProjectCreationMaster().subscribe(
      data => {
        this.list = data.filter((x: { id: any; }) => x.id == Number(this.id));
        this.projectNumber=data[0].projectNumber,
        this.projectName=data[0].projectName,
        this.clientName=data[0].clientName,
        this.description=data[0].description
        console.log("list", data)

      }
    )
  }

  public insertdetails() {
    var entity = {
      "ProjectNumber": this.projectNumber,
      "ProjectName": this.projectName,
      "ClientName": this.clientName,
      "Description": this.description
    }
    this.DigiInventoryService.InsertProjectCreationMaster(entity).subscribe(
      data => {
        alert("Saved Sucessfully");
        location.href = "#/Admin/ProjectCreationDashboard";
      }
    )
  }

  public updatedetails(){
    var entity = {
      "ID":this.id,
      "ProjectNumber": this.projectNumber,
      "ProjectName": this.projectName,
      "ClientName": this.clientName,
      "Description": this.description
    }
    this.DigiInventoryService.UpdateProjectCreationMaster(entity).subscribe(
      data=>{
        location.href="#/Admin/ProjectCreationDashboard";
        alert("Updated Successfully");
      }
    )
  }

}


