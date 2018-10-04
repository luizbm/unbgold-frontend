import { Injectable } from "@angular/core";

const AUTH_KEY = 'authToken';

@Injectable({ providedIn: 'root' })
export class TokenService {

  temToken() {
    return !!this.recuperaToken();
  }

  guardaToken(token) {
    window.localStorage.setItem(AUTH_KEY, token);
  }

  recuperaToken() {
    return window.localStorage.getItem(AUTH_KEY);
  }

  removeToken() {
    window.localStorage.removeItem(AUTH_KEY);
  }

}
