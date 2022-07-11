import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newprojectindentpmdash',
  templateUrl: './newprojectindentpmdash.component.html',
  styleUrls: ['./newprojectindentpmdash.component.css']
})
export class NewprojectindentpmdashComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  open()
  {
    window.open("assets/images/Po.pdf","_Blank")
  }

}
