import {Component, Input, OnInit, HostBinding} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {NotifyService} from "../notify.service";
import {Notification} from "../interface/notification";

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html'
})
export class NotifyComponent implements OnInit {
  @Input() set inputId(id: string) { this.id$.next(id) };
  id$ = new BehaviorSubject<string>(this.inputId)

  @HostBinding('id') get hostId() { return `unik_id${this.id$.value}` }
  //@HostBinding('id') hostId = `unik_id${this.id$.value}` //den blir ikke oppdatert

  msg = new BehaviorSubject<any>({})
  displayWarning: boolean = false
  text: string = ''
  msgColor: string = ''

  constructor(private service: NotifyService) {
    //if msg in notification emit new value, this.msg emit same value
    //and subscription will show the message
    this.msg = this.service.msg
  }

  ngOnInit(): void {
    this.msg.subscribe((whatever: Notification) => {
/*      console.log("whatever", whatever)
      console.log(whatever.msg?.length)*/

      if (whatever.msg?.length > 0) {
        this.displayWarning = true
        //message to display
        this.text = whatever.msg
        //color to use
        this.msgColor = whatever.type //not like that
      }
    })

  }

  closeOnClick() {
    this.displayWarning = false
  }
}
