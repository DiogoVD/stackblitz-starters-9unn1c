import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  //styleUrls: ['./app/app.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
