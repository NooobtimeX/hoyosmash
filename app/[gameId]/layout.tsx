import games from "@/data/games";
import type { Metadata } from "next"; // Import Metadata type

interface Params {
  gameId: string;
}

// Metadata generation function
export const generateMetadata = ({ params }: { params: Params }): Metadata => {
  const game = games.find((g) => g.id === params.gameId);

  const title = game?.title ? `${game.title} | Smash or Pass` : "Default Title";
  const description = game?.description || "Default Description";
  const keywords = game?.title
    ? game.title +
      ", smash or pass " +
      game.title +
      ", " +
      game.title +
      " smash or pass"
    : "default, keywords";
  const url = `https://hoyosmash.com/game/${game?.id || ""}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      images: game?.imgSrc ? `https://hoyosmash.com${game.imgSrc}` : undefined,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: game?.imgSrc ? `https://hoyosmash.com${game.imgSrc}` : undefined,
    },
  };
};

// Layout component
export default function GameLayout({
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
