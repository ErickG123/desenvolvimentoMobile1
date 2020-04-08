import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public livros: any = [
    {
      titulo: "Breves respostas para grandes questões",
      subtitulo: "",
      editora: "Hodder & Stoughton",
      autores: [
        {
          id: 1,
          nome: "Stephen Hawking"
        }
      ],
      ano: 2018,
      generos: [
        {
          id: 0,
          nome: "Biografia"
        }
      ],
      paginas: 256,
      imagem: "./assets/img/breves-respostas.jpg"
    }
  ]

  constructor() {}

}
