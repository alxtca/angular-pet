import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AkitaStateTestStore, AkitaStateTestState } from './akita-state-test.store';

@Injectable({ providedIn: 'root' })
export class AkitaStateTestQuery extends Query<AkitaStateTestState> {

  constructor(protected override store: AkitaStateTestStore) {
    super(store);
  }

}
