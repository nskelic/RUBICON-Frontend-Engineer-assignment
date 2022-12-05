import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { API_URL, IMAGE_API_URL } from 'src/config';

type ContentMode = 'movies' | 'shows';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  API_URL = API_URL;
  IMAGE_API_URL = IMAGE_API_URL;

  content = this.moviesService.getTopRated().pipe(map((data: any) => data?.results));

  constructor(
    private moviesService: MoviesService,
  ) {}

  ngOnInit(): void {}
}
