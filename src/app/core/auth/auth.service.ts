import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { tap } from "rxjs/operators";

import { UserService } from '@app/core/user/user.service';

const API_ULR = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  authenticate(userEmail: string, password: string){

    const body = new HttpParams()
          .set('email', userEmail)
          .set('password', password)

    return this.http
                .post(API_ULR + '/api/users/login',
                          body.toString(),
                          {
                            headers: new HttpHeaders()
                              .set('Content-Type', 'application/x-www-form-urlencoded')
                          })
                .pipe(tap(res => {
                  const authToken = res['token'];
                  this.userService.setToken(authToken);
                }))
  }
}
