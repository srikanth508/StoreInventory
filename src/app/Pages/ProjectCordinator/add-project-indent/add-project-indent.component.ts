import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-project-indent',
  templateUrl: './add-project-indent.component.html',
  styleUrls: ['./add-project-indent.component.css']
})
export class AddProjectIndentComponent implements OnInit {
  showdashboard:any;
  constructor() { }

  ngOnInit(): void {
  }


  showdash()
  {
    this.showdashboard=1
  }

}
