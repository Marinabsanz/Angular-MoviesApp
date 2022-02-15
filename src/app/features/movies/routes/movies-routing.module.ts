import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MoviesPageComponent } from '../movies-page/movies-page.component';


const routes: Routes= [

{
  path:'', 
  component: MoviesPageComponent,

}
]

@NgModule({
    declarations: [
      
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
    ],

    exports:[RouterModule]
  })


  export class MoviesRoutingModule {}