import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'angularmovies';
  open = false;

  readonly webApis = ['MovieCard', 'New Movie', 'Movie Details'];
 
    readonly tinkoff = [
        'Actors List',
        
    ];
 
 
  toggle(open: boolean) {
      this.open = open;
  }
  
 
}
