import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ExampleStore, ExampleState } from './example.store';

@Injectable({ providedIn: 'root' })
export class ExampleQuery extends QueryEntity<ExampleState> {

  constructor(protected store: ExampleStore) {
    super(store);
  }

}
