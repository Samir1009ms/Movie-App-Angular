import { IMovie } from './../../models/movie';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movies-item-container',
  templateUrl: './movies-item-container.component.html',
  styleUrls: ['./movies-item-container.component.scss'],
})
export class MoviesItemContainerComponent {
  @Input() itemData: IMovie | null = null;
}
