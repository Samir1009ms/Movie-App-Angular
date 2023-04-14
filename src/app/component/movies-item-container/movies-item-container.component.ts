import { IMovie, ITvShow } from './../../models/movie';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movies-item-container',
  templateUrl: './movies-item-container.component.html',
  styleUrls: ['./movies-item-container.component.scss'],
})
export class MoviesItemContainerComponent {
  @Input() movie: IMovie | null = null;
  @Input() tvShow: ITvShow | null = null;
}
