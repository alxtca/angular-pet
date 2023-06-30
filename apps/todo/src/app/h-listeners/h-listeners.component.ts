import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-h-listeners',
  templateUrl: './h-listeners.component.html'
})
export class HListenersComponent implements OnInit {
  counter: number =0;
  boxData: string = '';
  message: string = ''

  @HostListener('click', ['$event']) handleKeyDown(event: KeyboardEvent) {
    this.counter++
  }

  constructor() { }

  ngOnInit(): void {
  }

  resetCounter() {
    this.counter = 0
  }

  handleAction(e: string) {
    this.message = e
  }
}
