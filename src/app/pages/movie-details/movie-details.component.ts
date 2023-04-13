import { first } from 'rxjs';
import {IMovie, IMovieImages, IMovieVideo} from './../../models/movie';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailsComponent implements OnInit {
  movie: IMovie | null = null;
  movieImages: IMovieImages | null = null;

  movieVideos: IMovieVideo[] = [];
  constructor(private route: ActivatedRoute, private MovieService: MovieService) {}
  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideo(id);
      this.getMovieImages(id);
    });
  }

  getMovie(id: string) {
    this.MovieService.getMovie(id).subscribe(res => {
      this.movie = res;
    });
  }
  getMovieVideo(id: string) {
    this.MovieService.getMovieVideos(id).subscribe(res => {
      this.movieVideos = res;
    });
  }
  getMovieImages(id: string) {
    this.MovieService.getMovieImages(id).subscribe((movieImagesData) => {
      this.movieImages = movieImagesData;
      console.log(movieImagesData)
    });
  }
}
