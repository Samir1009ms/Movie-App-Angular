import { Component, OnInit } from '@angular/core';
import { TvShowService } from '../../services/tv-show.service';
import { ITvShow } from '../../models/movie';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.scss'],
})
export class TvShowComponent implements OnInit {
  tvShows: ITvShow[] | null = null;
  currentPage: number = 1;
  constructor(private tvShowService: TvShowService) {}

  ngOnInit(): void {
    this.getTvShows('popular', this.currentPage);
  }

  getTvShows(type: string, page: number) {
    this.tvShowService.getTvShows('popular', this.currentPage).subscribe(res => {
      this.tvShows = res;
    });
  }

  paginate(event: any) {
    this.currentPage = event.page + 1;
    this.getTvShows('popular', this.currentPage);
  }
}
