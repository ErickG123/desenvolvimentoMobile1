import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PopularPeoplePage } from './popular-people.page';

const routes: Routes = [
  {
    path: '',
    component: PopularPeoplePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PopularPeoplePage]
})
export class PopularPeoplePageModule {}
