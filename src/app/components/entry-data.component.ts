import { Component } from '@angular/core';

@Component({
  selector: 'app-entry-data',
  templateUrl: './entry-data.component.html',
  styleUrls: ['./entry-data.component.css'],
  standalone: true,
})
export class EntryDataComponent {
  placeholder: string = 'e-mail';
}
