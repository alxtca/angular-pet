import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as uuid from 'uuid';

@Component({
  selector: 'hb-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  @Input() public numberOfPages = 10;
  @Input() public numberOfPagesList = [10, 20, 50, 100];
  @Input() public prefiks = 'paging'; // Hvis vi har flere en 1 paging komponent på en side kan man justere denne
  @Input() public showRight = false;
  @Input() public startPos = 0;
  @Input() public total: number = 0;
  @Output() public changeNumberOfPages = new EventEmitter<number>();
  @Output() public changePage = new EventEmitter<number>();

  public uuid = uuid.v4();

  public onChange(antall: number) {
    this.changeNumberOfPages.emit(+antall);
  }

  public _endreSide(endring: number) {
    let startPos = this.startPos + endring;
    if (startPos < 0) {
      startPos = 0;
    }
    if (startPos >= this.total) {
      startPos = this.startPos;
    }
    this.changePage.emit(startPos);
    console.log(startPos);
  }

  public _forsteSide() {
    this.changePage.emit(0);
  }

  public _sisteSide() {
    const startPos = Math.floor(this.total / this.numberOfPages) * this.numberOfPages;
    this.changePage.emit(startPos);
  }
}
