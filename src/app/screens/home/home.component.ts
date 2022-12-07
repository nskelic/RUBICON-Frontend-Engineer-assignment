import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, combineLatest, map, mergeMap } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { ShowsService } from 'src/app/services/shows.service';
import { debounce } from 'src/app/utils';
import { API_URL, IMAGE_API_URL } from 'src/config';

type ContentMode = 'movies' | 'shows';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  API_URL = API_URL;
  IMAGE_API_URL = IMAGE_API_URL;

  mode = initMode();
  private searchQuery = new BehaviorSubject('');

  content = combineLatest([this.mode, this.searchQuery]).pipe(
    mergeMap(([mode, query]) => {
      return query?.length > 2 ? (
        mode === 'movies' ? this.moviesService.searchMovies(query) : this.showsService.searchShows(query)
        //localStorage.getItem('storedInput') ? (
        //  mode === 'movies' ? this.moviesService.searchMovies(localStorage.getItem('storedInput')!) : this.showsService.searchShows(localStorage.getItem('storedInput')!)
        //) : (mode === 'movies' ? this.moviesService.searchMovies(query) : this.showsService.searchShows(query))
      ).pipe(map((data: any) => data?.results))
      : (
        mode === 'movies' ?  this.moviesService.getTopRated() :  this.showsService.getTopRated()
      ).pipe(map((data: any) => data?.results));
    }) 
  );

  constructor(
    private moviesService: MoviesService,
    private showsService: ShowsService,
    private router: Router
  ) {}

  setMode = (val: ContentMode) => {
    this.mode.next(val);
  }

  onSearch = (event: any) => {
    const query: string = event?.target?.value || ''
    this.searchQuery.next(query);
  }

  navigate = (id: any) => {
    localStorage.setItem('storedMode', this.mode.getValue());
    localStorage.setItem('storedInput', this.searchQuery.getValue());
    this.router.navigateByUrl('/article-details/' + this.mode.getValue() + '/' + id);
  }

  debouncedSearch = debounce(this.onSearch, 1000)
}

function initMode() {
  return localStorage.getItem('storedMode') ? new BehaviorSubject(localStorage.getItem('storedMode') as ContentMode) : new BehaviorSubject('shows' as ContentMode);
}

