import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'M1-S11-Angular-DevinHouse';

  page:string = "1";

  mudaDePagina(id : string) {
    this.page = id;
  }
}
