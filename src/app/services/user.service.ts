import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userUrl = 'http://localhost:3000/users';
  constructor(private http: HttpClient) {}

  signUp(user: any) {
    console.log('user', user);

    return this.http.post<{ msg: string }>(this.userUrl, user);
  }
}
