import { Applicative } from "./Applicative";
import { Plus } from "./Plus";

export interface Alternative<T> extends Applicative<T>, Plus<T> {}
