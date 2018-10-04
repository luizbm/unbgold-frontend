import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { UserService } from "@app/core/user/user.service";

@Injectable({ providedIn: 'root' })
export class SignedInGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : boolean | Observable<boolean> | Promise<boolean>{

    if (!this.userService.taLogado()) {
        return true;
    }

    this.router.navigate(['professores']);
    return false;
  }

}
