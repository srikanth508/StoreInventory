import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-damaged-items',
  templateUrl: './damaged-items.component.html',
  styleUrls: ['./damaged-items.component.css']
})
export class DamagedItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  

  files: File[] = [];

  onSelect(event:any) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
