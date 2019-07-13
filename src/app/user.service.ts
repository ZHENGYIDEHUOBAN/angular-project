import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { tap } from 'rxjs/operators';
import { urlHeader } from './const';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = `${urlHeader}user`;

  constructor(
    private http: HttpClient
  ) { }

  regsiter(user: User) {
    return this.http.post<User>(this.usersUrl + '/register', user).pipe(
      tap((newUser: User) => console.log(newUser.id))
    );
  }

  getUsers() {
    return this.http.get<User[]>(this.usersUrl + '/findAll');
  }
}
