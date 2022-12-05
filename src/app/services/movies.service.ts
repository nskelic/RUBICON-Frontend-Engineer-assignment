import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_KEY, API_URL } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  searchMovies(query: string) {
    return this.http.get(
      `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
  }

  getMovie(id: string) {
    return this.http.get(
      `${API_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
    );
  }

  getTopRated() {
    return this.http.get(
      `${API_URL}/movie/top_rated?api_key=${API_KEY}`
    );
  }
}
