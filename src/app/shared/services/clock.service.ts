import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn:'root' })
export class ClockService {

  getClockTicker() {
    return new Observable( (observer) => {

      let timerId = setInterval(()=> {
        observer.next(new Date().toLocaleTimeString());
      }, 1000 );

      return {unsubscribe() { clearInterval(timerId) }};
    });
  }
}
