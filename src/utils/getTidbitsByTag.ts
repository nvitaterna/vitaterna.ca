import type { CollectionEntry } from "astro:content";
import getSortedTidbits from "./getSortedTidbits";

const getTidbitsByTag = (tidbits: CollectionEntry<"tidbit">[], tag: string) => {
  return getSortedTidbits(tidbits).filter(tidbit =>
    tidbit.data.tags.includes(tag)
  );
};

export default getTidbitsByTag;
