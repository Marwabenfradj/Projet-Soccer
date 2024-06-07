import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  playerUrl = 'http://localhost:3000/matches';
  constructor(private http: HttpClient) {}

  addPlayer(data: any) {
    return this.http.post<{ message: any }>(this.playerUrl, data);
  }

  updatePlayer(data: any) {
    return this.http.put<{ message: any }>(this.playerUrl, data);
  }

  getPlayerById() {}
}
