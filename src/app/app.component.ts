import { Component, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {



  public appPages = [{ title: 'Películas', url: '/movies' }];

  readonly moviesOptions = ['Añadir Nueva Película', 'Listado Películas'];
  readonly tinkoff = ['Listado de Actores'];

  open = true;
  toggle(open: boolean) {
    this.open = open;
  }
}
