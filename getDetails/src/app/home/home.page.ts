import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public moviesList:any;

  constructor(private movieService : MovieService) {
    this.getMovies();
  }

  private getMovies(){
    var dados = this.movieService.getPopularMovies().subscribe(
      data => {
       this.moviesList = (data as any).results;
      }, error => {
        console.log(error);
      }
    );
  }
}
