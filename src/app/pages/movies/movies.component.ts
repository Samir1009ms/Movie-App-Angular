import { MovieService } from './../../services/movie.service';
import { IMovie } from './../../models/movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  iMovies: IMovie[] = [];
  constructor(private MovieService: MovieService) {}
  ngOnInit(): void {
    this.getPage(1);
  }

  getPage(page: number) {
    this.MovieService.MovieData(page).subscribe(res => {
      this.iMovies = res;
    });
  }
  paginate(event: any) {
    this.getPage(event.page + 1);
  }
}
