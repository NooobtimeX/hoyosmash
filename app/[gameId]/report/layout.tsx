import games from "@/data/games";
import type { Metadata } from "next"; // Import Metadata type

interface Params {
  gameId: string;
}

// Metadata generation function
export function generateMetadata({ params }: { params: Params }): Metadata {
  const game = games.find((g) => g.id === params.gameId);

  return {
    title: game?.title
      ? `${game.title} | Report | Smash or Pass`
      : "Default Title",
    description: game?.title
      ? `Play Smash or Pass with characters from ${game.title}. Choose wisely and enjoy the game!`
      : "Join HoYoSmash! and play Smash or Pass with your favorite characters.",
    keywords: game?.title
      ? `${game.title}, Smash or Pass, characters`
      : "default, keywords",
    openGraph: {
      title: game?.title || "Default Title",
      description: `Engage in Smash or Pass with characters from ${game?.title || "the game"}.`,
      url: `https://hoyosmash.com/report/${game?.id || ""}`, // Template literal for URL
      images: game?.id ? `https://hoyosmash.com/game/${game.id}.webp` : "", // Ensure full URL
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: game?.title || "Default Title",
      description: `Play Smash or Pass with characters from ${game?.title || "the game"}.`,
      images: game?.id ? `https://hoyosmash.com/game/${game.id}.webp` : "", // Ensure full URL
    },
  };
}

export default function ReportLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  return (
    <div>
      <link rel="canonical" href={"https://hoyosmash.com/" + params.gameId} />

      {children}
    </div>
  );
}
