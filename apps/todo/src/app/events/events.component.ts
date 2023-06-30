import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logEvent($event: MouseEvent) {
    console.log($event)
  }

  onChange(e: Event) {
    //this.selectedItemsPerPage.emit( +((e.target as HTMLInputElement).value))
/*    was possible before
    <select (change)="onChange($event.target.value)">

    now:
    <select (change)="onChange($event)">

    */
  }

}
