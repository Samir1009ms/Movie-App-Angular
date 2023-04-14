import { Component, Input } from '@angular/core';
import { IGenres } from '../../models/movie';

@Component({
  selector: 'app-genres-items',
  templateUrl: './genres-items.component.html',
  styleUrls: ['./genres-items.component.scss'],
})
export class GenresItemsComponent {
  @Input() genres: IGenres[] = [];
  @Input() tvShowGenres: IGenres[] = [];
  @Input() title: string = '';
  @Input() path: string = '';
}
