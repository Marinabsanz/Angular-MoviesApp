import { Component, OnInit, Input} from '@angular/core';
import { Movie } from 'src/app/shared/interfaces/movie.interface';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

@Input() movie!: Movie

  constructor(
  


  ) { }

  ngOnInit(): void {
  }

}
