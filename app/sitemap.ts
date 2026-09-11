import type { MetadataRoute } from "next";
import { CONTACT_PATH, THANKS_PATH } from "@/lib/contact";
import { SITE_URL } from "@/lib/site";
import { featuredEssay, listEssays } from "@/lib/writing";

export default function sitemap(): MetadataRoute.Sitemap {
  const featured = featuredEssay();

  return [
    {
      url: SITE_URL,
      lastModified: featured.date,
    },
    {
      url: `${SITE_URL}/writing`,
      lastModified: featured.date,
    },
    {
      url: `${SITE_URL}${CONTACT_PATH}`,
    },
    {
      url: `${SITE_URL}${THANKS_PATH}`,
    },
    ...listEssays().map((essay) => ({
      url: `${SITE_URL}/writing/${essay.slug}`,
      lastModified: essay.date,
    })),
  ];
}
