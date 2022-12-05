import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, map, merge, mergeMap } from 'rxjs';
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
export class HomeComponent implements OnInit {
  API_URL = API_URL;
  IMAGE_API_URL = IMAGE_API_URL;

  mode = new BehaviorSubject('shows' as ContentMode);
  private searchQuery = new BehaviorSubject('');

  content = combineLatest([this.mode, this.searchQuery]).pipe(
    mergeMap(([mode, query]) => {
      return query?.length > 2 ? (
        mode === 'movies' ? this.moviesService.searchMovies(query) : this.showsService.searchShows(query)
      ).pipe(map((data: any) => data?.results))
      : (
        mode === 'movies' ?  this.moviesService.getTopRated() :  this.showsService.getTopRated()
      ).pipe(map((data: any) => data?.results));
    }) 
  );

  constructor(
    private moviesService: MoviesService,
    private showsService: ShowsService
  ) {}

  ngOnInit(): void {}

  setMode = (val: ContentMode) => {
    this.mode.next(val);
  }

  onSearch = (event: any) => {
    const query: string = event?.target?.value || ''
    this.searchQuery.next(query);
  }

  debouncedSearch = debounce(this.onSearch, 1000)
}
