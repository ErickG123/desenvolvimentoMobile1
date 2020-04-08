import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-top-movie',
  templateUrl: './top-movie.page.html',
  styleUrls: ['./top-movie.page.scss'],
})
export class TopMoviePage implements OnInit {

  public moviesList:any;

  constructor(private movieService : MovieService) {
    this.getTop();
  }

  private getTop(){
    var dados = this.movieService.getTopRated().subscribe(
      data => {
        this.moviesList = (data as any).results;
      }, error => {
        console.log(error);
      }
    );
  }
  
  ngOnInit() {
  }

}
