import type { Metadata } from "next"; // Import Metadata type

// Define metadata for the ReportPage
export const metadata: Metadata = {
  title: "All Games - HoYoSmash!",
  description:
    "Explore all games available in HoYoSmash! Participate in Smash or Pass with your favorite characters from various games.",
  keywords:
    "HoYoverse, games, Smash or Pass, Genshin Impact, Honkai Impact, character ratings, gaming community",
  openGraph: {
    title: "All Games - HoYoSmash!",
    description: "Explore all games available in HoYoSmash!",
    url: "https://hoyosmash.com/game", // Update this URL as needed
    images: "https://hoyosmash.com/favicon.ico", // Use a relevant image for Open Graph
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Games - HoYoSmash!",
    description: "Explore all games available in HoYoSmash!",
    images: "https://hoyosmash.com/favicon.ico", // Use a relevant image for Twitter
  },
};

// Layout component for the page
export default function GamesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <link rel="canonical" href="https://hoyosmash.com/game" />
      {children}
    </div>
  );
}
