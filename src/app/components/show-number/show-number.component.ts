import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-number',
  templateUrl: './show-number.component.html',
  styleUrls: ['./show-number.component.css']
})
export class ShowNumberComponent implements OnInit {
  @Input() numberFromParent: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
