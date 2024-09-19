import type { Metadata } from "next"; // Import Metadata type

// Metadata generation function
export function generateMetadata(): Metadata {
  return {
    title: "All Game Reports | Smash or Pass",
    description:
      "Explore all game reports and ratings from your favorite characters in HoYoSmash!",
    keywords:
      "Smash or Pass, game reports, character ratings, HoYoverse, Genshin Impact, Honkai Impact",
    openGraph: {
      title: "All Game Reports | Smash or Pass",
      description:
        "View all game reports and engage with your favorite characters in HoYoSmash!",
      url: "https://hoyosmash.com/report", // Example URL for the all reports page
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "All Game Reports | Smash or Pass",
      description:
        "Check out all game reports and ratings for your favorite characters!",
    },
  };
}

export default function AllGameReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
