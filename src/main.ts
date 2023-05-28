import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { helloApp } from './app/hello.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, helloApp],
  templateUrl: './app/app.component.html',
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
