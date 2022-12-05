import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {
  @Input() title: string = '';
  @Input() imageURL: string = '';
  @Input() videoKey?: string;

  constructor(private sanitizer: DomSanitizer) {}

  get videoUrl() {
    console.log(this.videoKey);
    return this.videoKey ? this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoKey) : undefined;
  }
}
