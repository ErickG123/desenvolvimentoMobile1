import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-indice',
  templateUrl: './indice.page.html',
  styleUrls: ['./indice.page.scss'],
})
export class IndicePage implements OnInit {

  constructor( private navCtrl : NavController ) { }

  ngOnInit() {
  }

  public abrirHome() : void{
    this.navCtrl.navigateForward('home');
  }

  public abrirContato() : void{
    this.navCtrl.navigateForward('contato');
  }

  public abrirAjuda() : void{
    this.navCtrl.navigateForward('ajuda');
  }

  public abrirList() : void{
    this.navCtrl.navigateForward('list');
  }

  public abrirSobre() : void{
    this.navCtrl.navigateForward('sobre');
  }
}
