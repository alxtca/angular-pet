import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";

@Component({
  selector: 'app-rxjs-practice',
  templateUrl: './rxjs-practice.component.html',
  styleUrls: ['./rxjs-practice.component.css']
})
export class RxjsPracticeComponent implements OnInit {

  apples = 10;
  apples$!: Observable<number>;
  applesBehavior$ = new BehaviorSubject(this.apples);

  constructor() { }

  ngOnInit(): void {
    this.apples$ = of(this.apples);
    this.apples$.subscribe(v=> console.log("aplles value: ", v));
    this.applesBehavior$.subscribe(v=> console.log("apllesBehavior value: ", v));
  }

  addApples() {
    this.apples++;
  }

  addApples2() {
    this.applesBehavior$.next(this.apples++)
  }
}
