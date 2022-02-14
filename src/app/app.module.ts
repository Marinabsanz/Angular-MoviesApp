import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesPageComponent } from './features/movies/movies-page/movies-page.component';
import { CompaniesComponent } from './features/companies/companies.component';
import { NewMovieComponent } from './features/new-movie/new-movie.component';

///Taiga

import { TuiRootModule, TuiDialogModule, TuiNotificationsModule, TUI_SANITIZER, } from "@taiga-ui/core";
import {TuiSidebarModule} from '@taiga-ui/addon-mobile';
import {TuiActiveZoneModule} from '@taiga-ui/cdk';
import { TuiAccordionModule } from '@taiga-ui/kit';
@NgModule({
  declarations: [
    AppComponent,
    MoviesPageComponent,
    CompaniesComponent,
    NewMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      TuiRootModule,
      BrowserAnimationsModule,
      TuiDialogModule,
      TuiNotificationsModule,
      TuiSidebarModule,
      TuiActiveZoneModule, 
      TuiAccordionModule
],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
