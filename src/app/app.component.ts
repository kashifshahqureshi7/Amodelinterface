import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {dataType } from './user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'modelinterface';
  getdata()
  {
    const data:dataType = {
      Name: 'Kashif Shah',
      id: 12,
      Pakistani:true

    }
    return data
  }
}
