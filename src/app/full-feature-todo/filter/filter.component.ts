import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {VISIBILITY_FILTER, TodoFilter} from "./filter.model";

@Component({
  selector: 'app-filter',
  template: `
    <div class="input-field col s12">
      <select [formControl]="control" class="browser-default">
        <option *ngFor="let filter of filters;" [ngValue]="filter.value">{{filter.label}}
        </option>
      </select>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {

  @Input() active!: VISIBILITY_FILTER;
  @Input() filters!: TodoFilter[];
  @Output() update = new EventEmitter<VISIBILITY_FILTER>();

  control!: FormControl;

  ngOnInit() {
    this.control = new FormControl(this.active);

    this.control.valueChanges.subscribe(c => {
      this.update.emit(c);
    });
  }

}
