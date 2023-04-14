import { IMovie } from 'src/app/models/movie';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private MovieService: MovieService) {}

  TopMovie: IMovie[] = [];
  PopularMovie: IMovie[] = [];
  TopRatedMovie: IMovie[] = [];

  ngOnInit(): void {
    this.MovieService.getMovies('upcoming').subscribe(res => {
      this.TopMovie = res;
    });

    this.MovieService.getMovies('popular').subscribe(res => {
      this.PopularMovie = res;
    });

    this.MovieService.getMovies('top_rated').subscribe(res => {
      this.TopRatedMovie = res;
    });





  }
}
