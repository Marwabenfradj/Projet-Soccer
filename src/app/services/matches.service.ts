import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MatchesService {
  matchUrl = 'http://localhost:3000/matches';
  constructor(private http: HttpClient) {}

  addMatch(data: any) {
    return this.http.post<{ message: any }>(this.matchUrl, data);
  }
  search(data: any) {
    return this.http.post<{ message: any }>(this.matchUrl, data);
  }

  getAllMatches() {
    return this.http.get<{ matches: any }>(this.matchUrl);
  }

  getMatchById(id: any) {
    return this.http.get<{ match: any }>(`${this.matchUrl}/${id}`);
  }

  // updateMatch(match: any, id: string) {
  //   return this.http.put<{ msg: any }>(`${this.matchUrl}/${id}`, match);
  // }

  updateMatch(data: any) {
    return this.http.put<{ message: any }>(this.matchUrl, data);
  }

  deleteMatch(id: any) {
    return this.http.delete<{ msg: any }>(`${this.matchUrl}/${id}`);
  }
}
