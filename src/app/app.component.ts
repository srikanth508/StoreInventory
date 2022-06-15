import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'StoreInventory';

  temp: any;

  ngOnInit() {
    this.temp = sessionStorage.getItem('temp');
  }
}
