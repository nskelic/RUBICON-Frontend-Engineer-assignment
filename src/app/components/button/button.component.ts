import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent {
  @Input() isActive: boolean = false;
}
