import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AkitaStateTestState, AkitaStateTestStore} from "./state/akita-state-test.store";
import {AkitaStateTestQuery} from "./state/akita-state-test.query";
import {AkitaStateTestService} from "./state/akita-state-test.service";

@Component({
  selector: 'app-akita-state-test',
  templateUrl: './akita-state-test.component.html'
})
export class AkitaStateTestComponent implements OnInit {
  currentState$!: Observable<AkitaStateTestState>;
  currentStateFromGetState!: AkitaStateTestState;

  constructor(
    private query: AkitaStateTestQuery,
    private service: AkitaStateTestService,
    private store: AkitaStateTestStore
  ) { }

  ngOnInit(): void {
    this.currentState$ =  this.query.select()
    this.currentStateFromGetState = this.store.getValue()
  }

  updateStore() {
    this.store.update({name: "Ktulhu"}) //this.update({ name }); - shorhand syntax
  }

  replaceStore() {
    this.store.update({name: "John", count: 18})
  }


  updateWithCallback() {
    this.store.update(state =>
      ({...state, name: state.name + "son"})
    )
  }
  updateWithCallback2() {
    this.store.update(state =>
      ({name: state.name + "son"})
    )
  }

  testMethod() {
    this.store.updateCount(20)
  }

  storeReset() {
    this.store.reset()
  }

  updateStoreWSpread() {
    const pf = {name: "Spread", count: 777}
    this.store.update({...pf})
  }

  useUpdateState() {

  }
}
