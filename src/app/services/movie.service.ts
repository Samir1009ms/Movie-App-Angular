import {IMovie, IMovieVideoDto, IMovieDto, IMovieImages} from './../models/movie';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  baseUrl = 'https://api.themoviedb.org/3/movie/';
  apiKey = '952398355be12c53036c047c5df2f1d3';

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http.get<IMovieDto>(`${this.baseUrl}${type}?api_key=${this.apiKey}`).pipe(
      switchMap(res => {
        return of(res.results.slice(0, count));
      })
    );
  }

  MovieData(page: number) {
    return this.http.get<IMovieDto>(`${this.baseUrl}popular?page=${page}&api_key=${this.apiKey}`).pipe(
      switchMap(res => {
        return of(res.results);
      })
    );
  }

  getMovie(id: string) {
    return this.http.get<IMovie>(`${this.baseUrl}${id}?api_key=${this.apiKey}`);
  }
  getMovieVideos(id: string) {
    return this.http.get<IMovieVideoDto>(`${this.baseUrl}${id}/videos?api_key=${this.apiKey}`).pipe(
      switchMap(res => {
        return of(res.results);
      })
    );
  }
  getMovieImages(id: string) {
    return this.http.get<IMovieImages>(`${this.baseUrl}${id}/images?api_key=${this.apiKey}`)
  }
}
