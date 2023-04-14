import { first } from 'rxjs';
import { ICast, IMovie, IMovieCredits, IMovieImages, IMovieVideo } from './../../models/movie';
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
  credits: IMovieCredits | null = null;
  similarMovies: IMovie[] = [];
  constructor(private route: ActivatedRoute, private MovieService: MovieService) {}
  ngOnInit(): void {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideo(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
      this.getMoviesSimilar(id);
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
    this.MovieService.getMovieImages(id).subscribe(movieImagesData => {
      this.movieImages = movieImagesData;
      console.log(movieImagesData);
    });
  }
  getMovieCredits(id: string) {
    this.MovieService.getMovieCredits(id).subscribe(res => {
      this.credits = res;
    });
  }
  getMoviesSimilar(id: string) {
    this.MovieService.getMoviesSimilar(id).subscribe(res => {
      this.similarMovies = res;
    });
  }
}
