import { Component } from '@angular/core';
import { requests } from "../requests";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Thuggah';
  requests=requests;
  Object=Object;
}
