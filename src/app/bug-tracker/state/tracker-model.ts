import {guid} from "@datorama/akita";

export interface TrackerModel {
  pn: string,
  description: string,
  complete: boolean
}

export function createPart(msg: string) {
  return {
    pn: guid(),
    description: msg,
    complete: false
  } as TrackerModel;
}
