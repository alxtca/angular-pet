import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-select-string',
  templateUrl: './select-string.component.html'
})
export class SelectStringComponent implements OnInit {
  @Input() displayList: string[] | any[] = [];
  @Input() displayTemplate!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    console.log("change")
  }
}
