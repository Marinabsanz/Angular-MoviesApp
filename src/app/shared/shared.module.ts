import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from '../features/movies/routes/movies-routing.module';
import { MovieCardComponent } from './components/movie-card/movie-card.component';


@NgModule({
  declarations: [  MovieCardComponent

   
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
  ],

  exports: [MoviesRoutingModule, MovieCardComponent]
})
export class SharedModule { }
