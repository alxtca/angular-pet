import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

//reset itemOffset everytime different itemsPerPage is selected, to avoid fkups
//where to do it? app-select, app-paginator, parent?
//in parent, it allready has a method to changeItemsPerPage(n)

//now I think there should be 2 components, paginator with and without selector

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html'
})
export class SelectComponent implements OnInit {
  @Input() itemsPerPage: number = 4;
  @Output() selectedItemsPerPage = new EventEmitter()
  itemsPerPageList: number[] = [2, 4, 5, 10];
  prefiks: string = 'prefiks'
  uuid: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(e: Event) {
    this.selectedItemsPerPage.emit( +((e.target as HTMLInputElement).value))
  }

}
