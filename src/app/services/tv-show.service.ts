import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, switchMap } from 'rxjs';
import { IMovieCredits, IMovieDto, ITvShow, ITvShowDto, ITvShowImagesDto, ITvShowVideoDto } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class TvShowService {
  constructor(private http: HttpClient) {}
  baseUrl = 'https://api.themoviedb.org/3/tv/';
  apKey = '952398355be12c53036c047c5df2f1d3';
  mainUrl = 'https://api.themoviedb.org/3/';

  getTvShows(page: number, searchValue?: string | null) {
    const url = searchValue ? 'search/tv' : 'tv/popular';
    return this.http
      .get<ITvShowDto>(`${this.mainUrl}${url}?page=${page}&query=${searchValue}&api_key=${this.apKey}`)
      .pipe(
        switchMap(res => {
          return of(res.results);
        })
      );
  }

  getTvShowDetails(id: number) {
    return this.http.get<ITvShow>(`${this.baseUrl}${id}?api_key=${this.apKey}`);
  }

  getTvShowCredits(id: number) {
    return this.http.get<IMovieCredits>(`${this.baseUrl}${id}/credits?api_key=${this.apKey}`);
  }

  getTvShowSimilar(id: number) {
    return this.http.get<ITvShowDto>(`${this.baseUrl}${id}/similar?api_key=${this.apKey}`).pipe(
      switchMap(res => {
        return of(res.results.slice(0, 12));
      })
    );
  }

  getTvShowVideos(id: number) {
    return this.http.get<ITvShowVideoDto>(`${this.baseUrl}${id}/videos?api_key=${this.apKey}`).pipe(
      switchMap(res => {
        return of(res.results);
      })
    );
  }
  getTvShowImages(id: number) {
    return this.http.get<ITvShowImagesDto>(`${this.baseUrl}${id}/images?api_key=${this.apKey}`);
  }
  getTvShowGenres() {
    return this.http.get<any>(`${this.mainUrl}genre/tv/list?api_key=${this.apKey}`).pipe(
      switchMap(res => {
        return of(res.genres);
      })
    );
  }
  getTvShowByGenre(id: string, page: number) {
    return this.http
      .get<ITvShowDto>(`${this.mainUrl}discover/tv?api_key=${this.apKey}&with_genres=${id}&page=${page}`)
      .pipe(
        switchMap(res => {
          return of(res.results);
        })
      );
  }
}
