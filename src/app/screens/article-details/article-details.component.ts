import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, tap } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { ShowsService } from 'src/app/services/shows.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.sass'],
})
export class ArticleDetailsComponent implements OnInit {
  articleData = this.route.params.pipe(
    mergeMap((params) => {
      console.log(params);
      const { category, id } = params;
      return category === 'movies'
        ? this.moviesService.getMovie(id)
        : this.showsService.getShow(id);
    }),
    tap(console.log)
  );

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService,
    private showsService: ShowsService
  ) {}

  ngOnInit(): void {}
}
