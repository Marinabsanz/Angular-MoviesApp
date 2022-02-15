import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesRoute } from './features/movies/routes/routes';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
 
  ...MoviesRoute
  ];

@NgModule({

  declarations:[],
  imports: [RouterModule.forRoot(routes), ],
  exports: [RouterModule, ],
})
export class AppRoutingModule { }
