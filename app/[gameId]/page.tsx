// app/[gameId]/page.tsx

import GamePage from "@/components/GamePage";
import { notFound } from "next/navigation";
import games from "@/data/games";

interface Params {
  gameId: string;
}

interface Game {
  id: string;
  title: string;
  description: string;
  imgSrc?: string;
}

export async function generateStaticParams() {
  const gamesList = (await import("@/data/games")).default;
  return gamesList.map((game: Game) => ({
    gameId: game.id,
  }));
}

const fetchGameData = async (gameId: string) => {
  const game = games.find((g) => g.id === gameId);
  if (!game) return null;
  const charactersModule = await import(`@/data/${game.id}.ts`);
  return { game, characters: charactersModule.default };
};

const Page = async ({ params }: { params: Params }) => {
  const gameData = await fetchGameData(params.gameId);
  if (!gameData) return notFound();

  return <GamePage gameData={gameData} />;
};

export default Page;
