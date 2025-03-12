import type { Metadata } from "next"

type ArticleMetadataParams = {
  title: string
  description: string
  slug: string
  imageUrl: string
  category: string
  publishDate: string
  author?: string
}

export function generateArticleMetadata({
  title,
  description,
  slug,
  imageUrl,
  category,
  publishDate,
  author = "Dr. Gregor Jenzer",
}: ArticleMetadataParams): Metadata {
  const fullTitle = `${title} | Jenzer Advisory`
  const url = `https://jenzeradvisory.com/insights/${slug}`

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Jenzer Advisory FZ-LLC",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: publishDate,
      authors: [author],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  }
}

