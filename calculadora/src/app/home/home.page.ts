import { Component } from '@angular/core';
import { NumericValueAccessor, RadioValueAccessor } from '@ionic/angular';
import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';
import { SelectorMatcher } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public n1:Number;
  public n2:Number;
  public result:Number;
  public operacao:string;

  constructor() {

  }

  public somar() : void{
    this.result = Number(this.n1) + Number(this.n2);
  }


  public subtrair() : void{
    this.result = Number(this.n1) - Number(this.n2);
  }

  
  public multiplicar() : void{
    this.result = Number(this.n1) * Number(this.n2);
  }

  
  public divisao() : void{
    this.result = Number(this.n1) / Number(this.n2);
    if((this.n1 == 0) || (this.n2 == 0)){
      alert("Não existe divisão por zero meu lindo");
    }   
  }

  public calcular() : void{
     if(this.operacao == '+') {
         this.somar();
     } 
     else if(this.operacao == '-') {
         this.subtrair();
     }
     else if(this.operacao == '*') {
      this.multiplicar();
  }
     else{
       this.divisao();
     }
  }
}