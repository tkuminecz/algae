export interface Applicative<A> {
    of(): Applicative<A>
}