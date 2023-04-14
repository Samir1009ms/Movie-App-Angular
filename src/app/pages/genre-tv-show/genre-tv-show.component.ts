import { Component, OnInit } from '@angular/core';
import { TvShowService } from '../../services/tv-show.service';
import { ActivatedRoute } from '@angular/router';
import { ITvShow } from '../../models/movie';

@Component({
  selector: 'app-genre-tv-show',
  templateUrl: './genre-tv-show.component.html',
  styleUrls: ['./genre-tv-show.component.scss'],
})
export class GenreTvShowComponent implements OnInit {
  tvShows: ITvShow[] = [];
  currentId: string = '';
  constructor(private tvShowService: TvShowService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.currentId = id;
      this.getTvShowByGenre(id);
    });
  }

  getTvShowByGenre(id: string, page: number = 1) {
    this.tvShowService.getTvShowByGenre(id, page).subscribe(res => {
      this.tvShows = res;
    });
  }
  paginate(event: any) {
    this.getTvShowByGenre(this.currentId, event.page + 1);
  }
}
