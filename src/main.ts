import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import { helloApp } from './app/hello.component';
import { myButton } from './app/components/button.component';
import { EntryDataComponent } from './app/components/entry-data.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, FormsModule, helloApp, myButton, EntryDataComponent],
  templateUrl: './app/app.component.html',
})
export class App {
  name = 'Angular';
  buttonLabel: string = 'Carrinho';
  buttonSecond: string = 'Add Favoritos';
}

bootstrapApplication(App);
