import { IMovie, IMovieVideoDto, IMovieDto, IMovieImages, IMovieCredits, IGenres, IGenreDto } from './../models/movie';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  baseUrl = 'https://api.themoviedb.org/3/movie/';
  apiKey = '952398355be12c53036c047c5df2f1d3';
  mainUrl = 'https://api.themoviedb.org/3/';

  constructor(private http: HttpClient) {}

  getMovies(type: string = 'upcoming', count: number = 12) {
    return this.http.get<IMovieDto>(`${this.baseUrl}${type}?api_key=${this.apiKey}`).pipe(
      switchMap(res => {
        return of(res.results.slice(0, count));
      })
    );
  }

  MovieData(page: number, searchValue?: string | null) {
    const url = searchValue ? 'search/movie' : 'movie/popular';
    return this.http
      .get<IMovieDto>(`${this.mainUrl}${url}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`)
      .pipe(
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
    return this.http.get<IMovieImages>(`${this.baseUrl}${id}/images?api_key=${this.apiKey}`);
  }
  getMovieCredits(id: string) {
    return this.http.get<IMovieCredits>(`${this.baseUrl}${id}/credits?api_key=${this.apiKey}`);
  }
  getMoviesSimilar(id: string) {
    return this.http.get<IMovieDto>(`${this.baseUrl}${id}/similar?api_key=${this.apiKey}`).pipe(
      switchMap(res => {
        return of(res.results.slice(0, 12));
      })
    );
  }

  getGenres() {
    return this.http.get<IGenreDto>(`${this.mainUrl}genre/movie/list?api_key=${this.apiKey}`).pipe(
      switchMap(res => {
        return of(res.genres);
      })
    );
  }
  getMoviesByGenre(id: string, page: number) {
    return this.http
      .get<IMovieDto>(`${this.mainUrl}discover/movie?api_key=${this.apiKey}&with_genres=${id}&page=${page}`)
      .pipe(
        switchMap(res => {
          return of(res.results);
        })
      );
  }
}
