import { Component, OnInit, Input } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ParenChildService} from "../parentchild.service";

//this is a child component

@Component({
  selector: 'app-show-number',
  templateUrl: './show-number.component.html'
})
export class ShowNumberComponent implements OnInit {
  @Input() numberFromParent: number = 0
  @Input() sendToServer!: BehaviorSubject<boolean>;

  childValiable: number = 47;

  readyToSend: boolean = false;
  send!: BehaviorSubject<boolean>;

  constructor(private sendService: ParenChildService) {
    this.send = this.sendService.send
  }

  ngOnInit(): void {
    this.send.subscribe(val => {
      //console.log("behavior subject value emitted: ", val)

      //this one is to display message in template
      this.readyToSend = val

      //here you can send what ever variable in this child to backend
      this.sendService.submitFormChild(this.childValiable)

      //to turn notification off
      setTimeout(() => {
        this.readyToSend = false;
      }, 3000)
    })
  }

}
