import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  msg = new BehaviorSubject({})

  constructor() { }

  public notify(ntype: string, nmsg: string, $event?: Event) {
    if ($event) $event.stopPropagation();

    this.msg.next({
      type: ntype,
      msg: nmsg,
    });
  }

}
