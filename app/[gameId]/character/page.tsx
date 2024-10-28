import { notFound } from "next/navigation";
import games from "@/data/games";
import CharacterList from "@/components/CharacterList"; // Move CharacterList to its own file
import { Game } from "@/types";

interface Params {
  gameId: string;
}

const fetchCharacterData = async (gameId: string) => {
  const game = games.find((g) => g.id === gameId);
  if (!game) return null;

  try {
    const charactersModule = await import(`@/data/${game.id}.ts`);
    return { game, characters: charactersModule.default };
  } catch (error) {
    console.error("Error loading character data:", error);
    return null;
  }
};

const CharacterPage = async ({ params }: { params: Params }) => {
  const gameData = await fetchCharacterData(params.gameId);
  if (!gameData) return notFound();

  return <CharacterList gameData={gameData} />;
};

export const generateStaticParams = async () => {
  const gamesList = (await import("@/data/games")).default;
  return gamesList.map((game: Game) => ({
    gameId: game.id,
  }));
};

export default CharacterPage;
