import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';

import { MoviesPageComponent } from './movies-page/movies-page.component';

const routes: Routes= [

{
  path:'', 
  component: MoviesPageComponent,

}
]


//meter paths de new movie  y de details


@NgModule({
    declarations: [
      
    ],
    imports: [
      CommonModule
    ]
  })


  export class MoviesRoutingModule {}