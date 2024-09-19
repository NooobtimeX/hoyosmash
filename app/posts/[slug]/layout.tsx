import { getPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";
import type { Metadata } from "next"; // Import Metadata type

type Params = {
  slug: string;
};

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  return {
    title: `${post.title} | HoYoSmash.com`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      images: [post.Image],
    },
  };
}

export default function PostLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    image: ["https://hoyosmash.com" + post.Image],
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: [
      {
        "@type": "Person",
        name: "NooobtimeX",
        url: "https://nooobtimex.me/",
      },
    ],
  };

  return (
    <>
      {children}
      {/* Render the JSON-LD script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
