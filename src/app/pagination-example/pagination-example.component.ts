import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-example',
  templateUrl: './pagination-example.component.html'
})
export class PaginationExampleComponent implements OnInit {
  //for pagination example
  pageItems: string[] = ['asdf1', 'qwee2', 'asdf3', 'zxcv4', 'zxwdf5', 'xcbrg6','asdf7', 'qwee8', 'asdf9', 'zxcv10', 'zxwdf11', 'xcbrg12' ]
  itemsPerPage: number = 5;
  itemsOffset: number = 0;//=currPage*itemPerPage

  constructor() { }

  ngOnInit(): void {
  }

  setItemOffset(itemOffset: number) {
    this.itemsOffset = itemOffset
  }

  changeItemsPerPage(n: number) {
    this.itemsPerPage = n;
    this.itemsOffset = 0 //reset to avoid showing wrong list / empty lists etc.
  }

}
