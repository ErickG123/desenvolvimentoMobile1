import { Component, OnInit } from '@angular/core';
import { GenreService } from '../services/genre.service';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {

  public gen:any;

  constructor(private genreService : GenreService) {
    this.getGen();
  }

  private getGen(){
    var dados = this.genreService.getGenreMovie().subscribe(
      data => {
        this.gen = (data as any).genres;
      }, error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
