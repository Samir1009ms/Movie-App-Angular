import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tv-show-video',
  templateUrl: './tv-show-video.component.html',
  styleUrls: ['./tv-show-video.component.scss'],
})
export class TvShowVideoComponent implements OnInit {
  @Input() key: string | null = null;
  @Input() site: string = 'YouTube';
  constructor(private sanitazer: DomSanitizer) {}
  videoUrl: SafeResourceUrl = '';
  ngOnInit(): void {
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
