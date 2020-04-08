import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../services/details.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  public idMovie:any;

  constructor(private detailsService : DetailsService) {
    this.getId();
  }

  private getId(){
    var dados = this.detailsService.getId().subscribe(
      data => {
       this.idMovie = (data as any).results;
      }, error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
