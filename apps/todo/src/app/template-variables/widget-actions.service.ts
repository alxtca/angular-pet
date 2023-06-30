import {inject, Injectable} from '@angular/core';
import {WidgetStateService as WidgetState } from './widget-state.service'

@Injectable({
  providedIn: 'root'
})
export class WidgetActionsService {

  state = inject(WidgetState, { self: true });

  reload() {
    this.state.lastUpdateAt = new Date();
    console.log('Reloads widget data...');
  }
  copyData() {
    console.log('Copy widget data into clipboard...');
  }

}
