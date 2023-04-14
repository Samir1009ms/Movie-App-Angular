import { Component, OnInit } from '@angular/core';
import { TvShowService } from '../../services/tv-show.service';
import { ActivatedRoute } from '@angular/router';
import { IMovieCredits, ITvShow, ITvShowImagesDto, ITvShowVideo, ITvShowVideoDto } from '../../models/movie';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrls: ['./tv-show-details.component.scss'],
})
export class TvShowDetailsComponent implements OnInit {
  constructor(private tvShowService: TvShowService, private route: ActivatedRoute) {}
  tvShow!: ITvShow;
  tvShowVideo!: ITvShowVideo[];
  tvShowImages: ITvShowImagesDto | null = null;
  tvShowCredits: IMovieCredits | null = null;
  similarTvShows: ITvShow[] = [];
  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getTvShowDetails(id);
      this.getTvShowVideo(id);
      this.getTvShowImages(id);
      this.getTvShowCredits(id);
      this.getTvShowSimilar(id);
    });
  }

  getTvShowDetails(id: number) {
    this.tvShowService.getTvShowDetails(id).subscribe(res => {
      this.tvShow = res;
    });
  }
  getTvShowVideo(id: number) {
    this.tvShowService.getTvShowVideos(id).subscribe(res => {
      this.tvShowVideo = res;
      console.log(res);
    });
  }
  getTvShowImages(id: number) {
    this.tvShowService.getTvShowImages(id).subscribe(res => {
      this.tvShowImages = res;
      console.log(res);
    });
  }
  getTvShowCredits(id: number) {
    this.tvShowService.getTvShowCredits(id).subscribe(res => {
      this.tvShowCredits = res;
      console.log(res);
    });
  }
  getTvShowSimilar(id: number) {
    this.tvShowService.getTvShowSimilar(id).subscribe(res => {
      this.similarTvShows = res;
    });
  }
}
