import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from '../../models/movie';

@Component({
  selector: 'app-genre-movie',
  templateUrl: './genre-movie.component.html',
  styleUrls: ['./genre-movie.component.scss'],
})
export class GenreMovieComponent implements OnInit {
  movies: IMovie[] = [];
  currentId: string = '';
  constructor(private movieService: MovieService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.currentId = id;
      this.getMovieByGenre(id);
    });
  }

  getMovieByGenre(id: string, page: number = 1) {
    this.movieService.getMoviesByGenre(id, page).subscribe(res => {
      this.movies = res;
    });
  }

  paginate(event: any) {
    this.getMovieByGenre(this.currentId, event.page + 1);
  }
}
