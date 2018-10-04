import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { ClockService } from '@app/shared/services/clock.service';
import { UserService } from '@app/core/user/user.service';
import { User } from '@app/core/user/user';

@Component({
  selector: 'mw-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  user$: Observable<User>;
  user: string;

  timer$: Observable<any>;
  timer: string;
  timerSubscription: Subscription;

  constructor(
      private userService: UserService,
      private clockService: ClockService,
      private router: Router
    ) {
    this.user$ = this.userService.getUser();
  }

  ngOnInit() {
    this.timer$ = this.clockService.getClockTicker();
    this.timerSubscription = this.timer$.subscribe((time) => {
      this.timer = time;
    })
  }

  ngOnDestroy(): void {
    this.timerSubscription.unsubscribe();
  }

  deslogar() {
    this.userService.deslogar();
    this.router.navigate(['']);
  }

}
