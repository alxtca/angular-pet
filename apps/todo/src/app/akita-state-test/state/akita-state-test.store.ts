import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface AkitaStateTestState {
  name: string,
  count: number,
}

export function createInitialState(): AkitaStateTestState {
  return {
    name:'',
    count:0
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'akita-state-test' })
export class AkitaStateTestStore extends Store<AkitaStateTestState> {

  constructor() {
    super(createInitialState());
  }

  updateName(name: string) {
    this.update({name})
  }

  updateCount(count: number) {
    this.update({count})
  }

}
