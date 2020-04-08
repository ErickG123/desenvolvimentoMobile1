import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public carros: any = [
    {
      marca: "Chevrolet",
      modelo: "Onyx",
      ano: 2017,
      cor: "Branca",
      combustivel: "flex"
    },
    {
      marca: "Chevrolet",
      modelo: "Vectra",
      ano: 2019,
      cor: "Preta",
      combustivel: "gasolina"
    },
    {
      marca: "Hyundai",
      modelo: "Veloster",
      ano: 2018,
      cor: "Preta",
      combustivel: "alcool"
    }
  ];

  constructor() { }

}
