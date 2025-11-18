import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

const getSortedTidbits = (tidbits: CollectionEntry<"tidbit">[]) => {
  return tidbits
    .filter(postFilter)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.pubDatetime).getTime() / 1000) -
        Math.floor(new Date(a.data.pubDatetime).getTime() / 1000)
    );
};

export default getSortedTidbits;
