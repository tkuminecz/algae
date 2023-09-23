export interface Filterable<T> {
  filter(predicate: (t: T) => boolean): Filterable<T>;
}
