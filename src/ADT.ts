// ADTs

// type TaggedVariant = { tag: string; data: unknown };

// type CasesOf<V extends TaggedVariant, B> = {
//   [K in V["tag"] as K]: (data: Extract<V, { tag: K }>["data"]) => B;
// };

type TaggedVariant = { tag: string };

// type ExtractData<V extends TaggedVariant, K> = Extract<V, { tag: K }>["data"];
type ExtractData<V extends TaggedVariant, K> = Omit<
  Extract<V, { tag: K }>,
  "tag"
>;

type CasesOf<V extends TaggedVariant, B> = {
  [K in V["tag"] as K]: (data: ExtractData<V, K>) => B;
};

/**
 * Base abstract class for an algebraic data type
 * that is defined using tagged variants
 */
abstract class ADT<T extends TaggedVariant> {
  constructor(protected readonly data: T) {}

  /**
   * Match against possible variants. Similar
   * to pattern-matching in other languages.
   */
  match<B>(cases: CasesOf<T, B>): B {
    const { tag, ...rest } = this.data;
    if (tag in cases) {
      const handler = cases[tag as keyof typeof cases];
      return handler(rest);
    }
    // Typescript should prevent us from ever getting here, but
    // we throw here for safety and to appease the compiler.
    throw new Error(`Unhandled match case: ${tag}`);
  }
}
