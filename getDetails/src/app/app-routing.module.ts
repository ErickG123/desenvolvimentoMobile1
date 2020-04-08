import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'top-movie', loadChildren: './top-movie/top-movie.module#TopMoviePageModule' },
  { path: 'popular-people', loadChildren: './popular-people/popular-people.module#PopularPeoplePageModule' },
  { path: 'detalhes', loadChildren: './detalhes/detalhes.module#DetalhesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
