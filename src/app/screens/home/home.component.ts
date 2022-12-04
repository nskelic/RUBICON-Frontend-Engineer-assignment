import { Component, OnInit } from '@angular/core';

type ContentMode = 'movies' | 'shows';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {}
}
