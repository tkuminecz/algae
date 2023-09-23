// import { Applicative } from "./Applicative";
import { Apply } from "./Apply";
import { Chain } from "./Chain";

export interface Monad<T> extends Apply<T>, Chain<T> {}
