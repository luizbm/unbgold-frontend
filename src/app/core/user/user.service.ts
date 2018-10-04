import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import * as jwt_decode from "jwt-decode"

import { User } from "./user";
import { TokenService } from "@app/core/token/token.service";

@Injectable()
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);

    constructor(private tokenService: TokenService){
        this.tokenService.temToken() &&
            this.decodeAndPublish()
    }

    setToken(token: string) {
        this.tokenService.guardaToken(token);
        this.decodeAndPublish();
    }

    private decodeAndPublish() {
        const token = this.tokenService.recuperaToken();
        const user = jwt_decode(token) as User;

        this.userSubject.next(user);
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    taLogado() {
        return this.tokenService.temToken();
    }

    deslogar() {
      this.tokenService.removeToken();
      this.userSubject.next(null);
    }
}
