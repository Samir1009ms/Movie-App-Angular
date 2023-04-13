import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-video',
  templateUrl: './movie-video.component.html',
  styleUrls: ['./movie-video.component.scss'],
})
export class MovieVideoComponent implements OnInit {
  @Input() key: string | null = null;
  @Input() site: string = 'YouTube';

  videoUrl: SafeResourceUrl = '';

  constructor(private sanitazer: DomSanitizer) {}

  ngOnInit() {
    switch (this.site) {
      case 'YouTube':
        this.videoUrl = this.getSafeUrl('https://www.youtube.com/embed/' + this.key);
        break;
      case 'Vimeo':
        this.videoUrl = this.getSafeUrl('https://www.vimeo.com/embed/' + this.key);
        break;
    }
  }

  getSafeUrl(url: string) {
    return this.sanitazer.bypassSecurityTrustResourceUrl(url);
  }
}
