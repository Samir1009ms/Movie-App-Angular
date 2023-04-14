import { IMovie, ITvShow } from './../../models/movie';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.scss'],
})
export class MoviesItemComponent {
  @Input() movies: IMovie[] = [];
  @Input() tvShows: ITvShow[] = [];
  @Input() title: string = '';
}
