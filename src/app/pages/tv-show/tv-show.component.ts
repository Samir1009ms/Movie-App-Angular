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
  searchValue: string | null = '';
  constructor(private tvShowService: TvShowService) {}

  ngOnInit(): void {
    this.getTvShows(1);
  }

  getTvShows(page: number, sarchValue?: string | null) {
    this.tvShowService.getTvShows(this.currentPage, sarchValue).subscribe(res => {
      this.tvShows = res;
    });
  }

  paginate(event: any) {
    this.currentPage = event.page + 1;
    this.searchValue ? this.getTvShows(this.currentPage, this.searchValue) : this.getTvShows(this.currentPage);
  }
  searchChanged() {
    this.searchValue ? this.getTvShows(this.currentPage, this.searchValue) : this.getTvShows(this.currentPage);
  }
}
