import { Component } from '@angular/core';
import { TelevisaoService } from '../services/televisao.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public popTv:any;

  constructor(private televisaoService : TelevisaoService) {
    this.getPopular();
  }

  private getPopular(){
    var dados = this.televisaoService.getPopularTv().subscribe(
      data => {
        this.popTv = (data as any).results;
      }, error => {
        console.log(error);
      }
    );
  }
}
