import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-popular-people',
  templateUrl: './popular-people.page.html',
  styleUrls: ['./popular-people.page.scss'],
})
export class PopularPeoplePage implements OnInit {

  public peopleList: any;

  constructor(private peopleService: PeopleService) {
    this.getPopular();
  }

  private getPopular() {
    var dados = this.peopleService.getPopularPeople().subscribe(
      data => {
        this.peopleList = (data as any).results;

      }, error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
  }

}
