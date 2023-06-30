import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-kid',
  templateUrl: './kid.component.html',
  styleUrls: ['./kid.component.css']
})
export class KidComponent implements OnInit, OnDestroy {
  @Input() control!: FormControl;
  local_control!: FormControl;
  subscription!: Subscription;

  constructor() {  }

  ngOnInit(): void {
    this.control.setValue("con_run")//cases ERROR

    this.local_control = new FormControl(this.control.value)

    this.subscription = this.local_control.valueChanges.subscribe(v=> {
      console.log(v)
      this.control.setValue(v)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
