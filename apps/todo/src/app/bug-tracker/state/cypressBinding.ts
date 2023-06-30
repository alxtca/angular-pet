import {TrackerQuery} from "./tracker.query";
import {TrackerService} from "./tracker.service";

export function queryCypressBinding(query: TrackerQuery) {
  const name = query.constructor.name; //or TrackerQuery.name
  if ((window as any).Cypress) {
    // @ts-ignore
    query.select().subscribe(_ => window[name] = query.getValue()); // updates the field with new state
  } else {
    // @ts-ignore
    delete window[name]
  }
}

export function serviceCypressBinding(service: TrackerService) {
  const name = service.constructor.name;
  if ((window as any).Cypress) {
    console.log('testing environment detected adding ' + name);
    // @ts-ignore
    window[name] = service;
  } else {
    // @ts-ignore
    delete window[name];
  }
}
