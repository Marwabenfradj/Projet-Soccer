import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  teamUrl = 'http://localhost:3000/matches';
  constructor(private http: HttpClient) {}

  addTeam(data: any) {
    return this.http.post<{ message: any }>(this.teamUrl, data);
  }

  getAllTeams() {
    return this.http.get<{ teams: any }>(this.teamUrl);
  }
}
