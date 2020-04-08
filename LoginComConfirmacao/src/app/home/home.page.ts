import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public conta:String;
  public senha:String;

  constructor() {}


  public logar() :void{
    if((this.conta == "admds@etec.com") && (this.senha == "admin123")){
      alert("Login confirmado");
    }
    else{
      alert("Login recusado conta/senha incorreto");
    }
  }
}
