import { Injectable } from '@angular/core';
import {EntityState, EntityStore, Store, StoreConfig} from '@datorama/akita';
import {TrackerModel} from "./tracker-model";

/*
export declare class EntityStore<S extends EntityState = any, EntityType = getEntityType<S>, IDType = getIDType<S>> extends Store<S> {

export interface EntityState<E = any, IDType = any> {
  entities?: HashMap<E>;
  ids?: IDType[];
  loading?: boolean;
  error?: any;
  [key: string]: any;
}

second type provided is - EntityType = getEntityType<S>
ui: EntityUIStore<any, EntityType>;
*/


export interface TrackerState extends EntityState<TrackerModel> {

  //to extend store with more properties (mb objects? mb yes mb no idk)
  //1. update interface with that property
  filter: string;
  //another_prop: string;
}

export function createInitialState(): TrackerState {
  return {
    filter: 'ALL'
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'tracker', idKey: 'pn' })

//EntityStore has all those methods: set() add() upsert() replace()
// it also inherits methods from Store: update() setLoading() setError() destroy()
export class TrackerStore extends EntityStore<TrackerState> {

  constructor() {
    //2. start using that property
    super(createInitialState());
  }

}
