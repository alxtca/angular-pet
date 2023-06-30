export function checkOut<T, V>(item: T, customer: V) : T {

  return item
}

export interface SpecialState<T, V> {
  todos: T[],
  unknownShit: V,
}

//with each additional type parameter level of abstraction goes up and practicality goes down
