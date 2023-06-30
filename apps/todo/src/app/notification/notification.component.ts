import { Component, OnInit } from '@angular/core';
import {NotifyService} from "../notify.service";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent implements OnInit {

  constructor(private service: NotifyService) { }

  ngOnInit(): void {
  }

  sendNotification() {
    this.service.notify('WARNING', 'The warning message')
  }

}
