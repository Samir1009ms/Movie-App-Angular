import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { IGenres } from '../../models/movie';
import { TvShowService } from '../../services/tv-show.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  genres: IGenres[] = [];
  tvShowGenres: IGenres[] = [];
  constructor(private movieService: MovieService, private tvShowService: TvShowService) {}

  ngOnInit(): void {
    this.getGenres();
    this.getTvShowGenres();
  }

  getGenres() {
    this.movieService.getGenres().subscribe(res => {
      this.genres = res;
    });
  }

  getTvShowGenres() {
    this.tvShowService.getTvShowGenres().subscribe(res => {
      this.tvShowGenres = res;
    });
  }
}
