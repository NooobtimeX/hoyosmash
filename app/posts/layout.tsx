import type { Metadata } from "next"; // Import Metadata type

// Define the metadata for the BlogPage
export const metadata: Metadata = {
  title: "All Blog Posts - HoYoSmash!",
  description:
    "Explore all blog posts related to HoYoSmash, including guides, tips, and character features. Join our community and participate in the Smash or Pass game!",
  keywords:
    "HoYoverse, blog, posts, guides, character features, Genshin Impact, Honkai Impact",
  openGraph: {
    title: "All Blog Posts - HoYoSmash!",
    description: "Explore all blog posts related to HoYoSmash.",
    url: "https://hoyosmash.com/posts", // Update this URL as needed
    images: "https://hoyosmash.com/favicon.ico", // Use a relevant image for the blog
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Blog Posts - HoYoSmash!",
    description: "Explore all blog posts related to HoYoSmash.",
    images: "https://hoyosmash.com/favicon.ico", // Use a relevant image for Twitter
  },
};

// Layout component for the BlogPage
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
