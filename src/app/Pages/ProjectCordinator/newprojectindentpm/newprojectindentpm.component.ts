import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newprojectindentpm',
  templateUrl: './newprojectindentpm.component.html',
  styleUrls: ['./newprojectindentpm.component.css']
})
export class NewprojectindentpmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showdashboard:any;
  
  showdash()
  {
    this.showdashboard=1
  }

}
