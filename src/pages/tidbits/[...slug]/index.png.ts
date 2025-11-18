import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { getPath } from "@/utils/getPath";
import { generateOgImageForTidbit } from "@/utils/generateOgImages";
import { SITE } from "@/config";

export async function getStaticPaths() {
  if (!SITE.dynamicOgImage) {
    return [];
  }

  const tidbits = await getCollection("tidbit").then(p =>
    p.filter(({ data }) => !data.draft && !data.ogImage)
  );

  return tidbits.map(tidbit => ({
    params: { slug: getPath(tidbit.id, tidbit.filePath, false) },
    props: tidbit,
  }));
}

export const GET: APIRoute = async ({ props }) => {
  if (!SITE.dynamicOgImage) {
    return new Response(null, {
      status: 404,
      statusText: "Not found",
    });
  }

  const buffer = await generateOgImageForTidbit(
    props as CollectionEntry<"tidbit">
  );
  return new Response(new Uint8Array(buffer), {
    headers: { "Content-Type": "image/png" },
  });
};
