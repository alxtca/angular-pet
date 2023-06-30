import {Component, ContentChild, ElementRef, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-display-template',
  templateUrl: './display-template.component.html'
})
export class DisplayTemplateComponent implements OnInit {
  @Input() inputTemplate!: TemplateRef<any>;
  @ContentChild('para') para!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}
