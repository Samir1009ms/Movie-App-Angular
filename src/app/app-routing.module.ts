import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { GenresComponent } from './pages/genres/genres.component';
import { GenreMovieComponent } from './pages/genre-movie/genre-movie.component';
import { TvShowComponent } from './pages/tv-show/tv-show.component';
import { TvShowDetailsComponent } from './pages/tv-show-details/tv-show-details.component';
import { GenreTvShowComponent } from './pages/genre-tv-show/genre-tv-show.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
  },
  {
    path: 'genres',
    component: GenresComponent,
  },
  {
    path: 'genres/movies/:id',
    component: GenreMovieComponent,
  },
  {
    path: 'genres/tv-shows/:id',
    component: GenreTvShowComponent,
  },
  {
    path: 'tv-shows',
    component: TvShowComponent,
  },
  {
    path: 'tv-shows/:id',
    component: TvShowDetailsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
