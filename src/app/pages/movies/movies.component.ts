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
  searchValue: string | null = '';
  constructor(private MovieService: MovieService) {}
  ngOnInit(): void {
    this.getPage(1);
  }

  getPage(page: number, searchValue?: string) {
    this.MovieService.MovieData(page, searchValue).subscribe(res => {
      this.iMovies = res;
    });
  }
  paginate(event: any) {
    this.searchValue ? this.getPage(event.page + 1, this.searchValue) : this.getPage(event.page + 1);
  }
  searchChanged() {
    this.searchValue ? this.getPage(1, this.searchValue) : this.getPage(+1);
  }
}
