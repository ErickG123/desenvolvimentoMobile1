import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private urlBase: string = "https://api.themoviedb.org/3";
  private apiKey: string = "api_key=473f751452c490fc88d4ced0aebdb018&language=pt-BR";

  constructor(private http : HttpClient) { }

  getPopularMovies(){
    return this.http.get( this.urlBase + "/movie/popular?" + this.apiKey);
  }

  getTopRated(){
    return this.http.get( this.urlBase + "/movie/top_rated?" + this.apiKey);
  }
}
