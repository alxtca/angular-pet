import { Injectable } from '@angular/core';
import { TrackerStore } from './tracker.store';
import {createPart} from "./tracker-model";
import {serviceCypressBinding} from "./cypressBinding";

@Injectable({ providedIn: 'root' })

//It will also determine which entity currently has the active state (also defined in the store), and update its values.
export class TrackerService {

  constructor(private trackerStore: TrackerStore) {
    serviceCypressBinding(this)
  }

  //CRUD - create read update delete

  //set() - Replace current collection with the provided collection, and resets the active entity:

  insertNewTodos() {
    // Pass an object       store.set({ 1: Entity, 2: Entity });
/*    this.trackerStore.set({
      one: {id: '234edfnmm0y', message: '1 inserted with set()', completed: false},
      two: {id: '234edfnmm02', message: '2 inserted with set()', completed: false},
      three: {id: '234edfnmm03', message: '3 inserted with set()', completed: false},
    })*/
  }

  insertNewTodosArray() {
    // Pass an array         store.set([ Entity, Entity ]);
/*    this.trackerStore.set([
      {id: '234edfnmm0y', message: '1 inserted with set([])', completed: false},
      {id: '234edfnmm02', message: '2 inserted with set([])', completed: false},
      {id: '234edfnmm03', message: '3 inserted with set([])', completed: false},
    ])*/
  }

  //add() - Add an entity or entities to the store:

  insertPn(desc: string) {
    this.trackerStore.add(createPart(desc))
  }

  getById() {
    //const todo = query.getEntity(id);
  }

  // Remove one     store.remove(5);

  deleteOne(id: string) {
    //remove one entity
    this.trackerStore.remove(id)
  }

  updateOne(id: string, desc: string) {
    // Update one     store.update(entityId, { name: 'New Name' });
    //console.log("updating", part)
    this.trackerStore.update(id,{description: desc})
  }

  insertNewParts() {
    const td1 = createPart('Showel')
    const td2 = createPart('Hammer')
    const td3 = createPart('Chisel')
    this.trackerStore.add([td1, td2, td3])
  }

  insertMoreParts() {
    const td1 = createPart('P1')
    const td2 = createPart('P2')
    const td3 = createPart('P3')
    this.trackerStore.add([td1, td2, td3])
  }
}
