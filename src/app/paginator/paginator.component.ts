import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

//how I want this component to work
//does this tracks current page?
// - yes, because I want parent to be simplest possible

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent {
  @Input() itemsOffset: number = 0;
  @Input() itemsPerPage: number = 3;
  @Input() totalItems: number = 0;

  @Output() changeItemOffset = new EventEmitter();

  constructor() {  }

  onPageChange(go: string){
    switch (go) {
      case 'first':
        this.changeItemOffset.emit(0);
        break;

      case 'back':
        if(this.itemsOffset <= 0) this.changeItemOffset.emit(0);
        else this.changeItemOffset.emit(this.itemsOffset-this.itemsPerPage);
        break;

      case 'forth':
        if(this.itemsOffset + this.itemsPerPage < this.totalItems) this.changeItemOffset.emit(this.itemsOffset+this.itemsPerPage)
        break;

      case 'last':
        let startPos;
        startPos = Math.floor(this.totalItems / this.itemsPerPage) * this.itemsPerPage; //heleSider*itemsPerSide

        console.log("startpos før ", startPos)
        console.log("total items", this.totalItems)

        //to make sure last page is not empty in some cases
        if(startPos == this.totalItems){
          startPos -= this.itemsPerPage
        }

        console.log("startpos", startPos)
        console.log("total items", this.totalItems)
        this.changeItemOffset.emit(startPos) //for odd numbers ok, for even not
        break;
    }
  }
}
