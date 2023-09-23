export interface Applicative<A> {
  of(a: A): Applicative<A>;
}
