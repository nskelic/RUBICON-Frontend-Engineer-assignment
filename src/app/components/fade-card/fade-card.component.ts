import { Component, Input } from '@angular/core';

@Component({
  selector: 'fade-card',
  templateUrl: './fade-card.component.html',
  styleUrls: ['./fade-card.component.sass']
})
export class FadeCardComponent {
  @Input() title = '';
  @Input() imageURL = '';
}

