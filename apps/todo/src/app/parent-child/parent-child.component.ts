import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ParenChildService} from "./parentchild.service";

//this is a parent component

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html'
})
export class ParentChildComponent implements OnInit {
  parnum: number = 10;
  submitForm = new BehaviorSubject(false)

  constructor(private sendService: ParenChildService) { }

  ngOnInit(): void {
  }

  handleIncrease() {
    this.parnum++
  }

  sendToService() {
    this.sendService.submitFormParent()
  }

  sendToChild() {
    this.submitForm.next(true)
    setTimeout(() => {
      this.submitForm.next(false);
    }, 3000)
  }
}
