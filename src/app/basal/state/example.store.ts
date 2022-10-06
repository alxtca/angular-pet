import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Example } from './example.model';

export interface ExampleState extends EntityState<Example> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'example' })
export class ExampleStore extends EntityStore<ExampleState, Example> {

  constructor() {
    super();
  }


}
