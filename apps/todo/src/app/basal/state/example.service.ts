import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Example } from './example.model';
import { ExampleStore } from './example.store';

@Injectable({ providedIn: 'root' })
export class ExampleService {

  constructor(private exampleStore: ExampleStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Example[]>('https://api.com').pipe(tap(entities => {
      this.exampleStore.set(entities);
    }));
  }

  add(example: Example) {
    this.exampleStore.add(example);
  }

  update(id, example: Partial<Example>) {
    this.exampleStore.update(id, example);
  }

  remove(id: ID) {
    this.exampleStore.remove(id);
  }

}
