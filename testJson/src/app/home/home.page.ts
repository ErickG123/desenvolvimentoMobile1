import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public carros:any = [
    {
      marca : "Chevrolet",
      modelo : "Onyx",
      ano : 2017,
      cor : "Branco",
      combustivel : "Flex",
      imagem: "./assets/img/onix.jpg"
    },
    {
      marca : "Chevrolet",
      modelo : "Vectra",
      ano : 2019,
      cor : "Preto",
      combustivel : "Gasolina",
      imagem: "./assets/img/vectra.jpg"
    },
    {
      marca : "Hyundai",
      modelo : "Veloster",
      ano : 2018,
      cor : "Preto",
      combustivel : "Alcool",
      imagem: "./assets/img/veloster.jpg"
    }
  ];

  constructor() {}

}
