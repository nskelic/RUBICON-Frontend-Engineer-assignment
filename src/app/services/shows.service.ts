import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_KEY, API_URL } from 'src/config';

@Injectable({
  providedIn: 'root',
})
export class ShowsService {
  constructor(private http: HttpClient) {}

  searchShows(query: string) {
    return this.http.get(
      `${API_URL}/search/tv?api_key=${API_KEY}&query=${query}`
    );
  }

  getShow(id: string) {
    return this.http.get(
      `${API_URL}/tv/${id}?api_key=${API_KEY}&append_to_response=videos`
    );
  }

  getTopRated() {
    return this.http.get(
      `${API_URL}/tv/top_rated?api_key=${API_KEY}`
    );
  }
}
