import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
})
export class myButton {
  @Input() Label: string = '';
  //buttonText = 'Click here';
}
