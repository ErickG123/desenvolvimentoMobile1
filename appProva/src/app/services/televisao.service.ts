import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TelevisaoService {

  private urlBase: string = "https://api.themoviedb.org/3";
  private apiKey: string = "api_key=9c60255cd6ed15ce048b65919ba8f318&language=pt-BR";

  constructor(private http : HttpClient) { }

  getPopularTv(){
    return this.http.get(this.urlBase + "/tv/popular?" + this.apiKey);
  }
}
