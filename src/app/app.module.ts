import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HomeComponent } from './pages/home/home.component';

import { MoviesItemContainerComponent } from './component/movies-item-container/movies-item-container.component';
import { SliderComponent } from './component/slider/slider.component';

import { HeaderComponent } from './shared/header/header.component';


// import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesItemComponent } from './component/movies-item/movies-item.component';

import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { MovieVideoComponent } from './component/movie-video/movie-video.component';
import { ImageModule } from 'primeng/image';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    MoviesItemContainerComponent,
    SliderComponent,
    MoviesComponent,
    HeaderComponent,
    HomeComponent,
    MoviesItemComponent,
    MovieVideoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, PaginatorModule, TabViewModule,ImageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
