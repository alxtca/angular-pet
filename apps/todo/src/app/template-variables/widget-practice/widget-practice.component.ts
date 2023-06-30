import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-widget-practice',
  templateUrl: './widget-practice.component.html',
  styleUrls: ['./widget-practice.component.css']
})
export class WidgetPracticeComponent implements OnInit {
  @Input() inputTemplate!: TemplateRef<any>
  internal_state = "this is state defined inside widget practice component";

  constructor() { }

  ngOnInit(): void {
  }

}
