import { Component, Input, OnInit } from '@angular/core';
import { state, animate, style, transition, trigger } from '@angular/animations';
import { IMovie } from 'src/app/models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [trigger('animation', [state('open', style({ opacity: 0 })), transition('open<=>*', [animate('1s')])])],
})
export class SliderComponent implements OnInit {
  @Input() items: IMovie[] = [];
  @Input() isBanner: boolean = false;

  counter: number = 0;

  ngOnInit(): void {
    if (!this.isBanner) {
      setInterval(() => {
        this.counter = ++this.counter % this.items.length;
      }, 2500);
    }
  }
}
