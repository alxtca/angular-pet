import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-rendering',
  templateUrl: './rendering.component.html',
  styleUrls: ['./rendering.component.css']
})
export class RenderingComponent implements OnInit {
  parent_control!: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.parent_control = new FormControl("start value")
  }

}
