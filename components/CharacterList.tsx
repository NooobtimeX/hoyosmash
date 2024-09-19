// CharacterList.tsx
"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import games from "@/data/games";

interface Params {
  gameId: string;
}

interface Game {
  id: string;
  title: string;
}

const fetchGameData = async (gameId: string) => {
  const game = games.find((g) => g.id === gameId);
  if (!game) return null;
  const charactersModule = await import(`@/data/${game.id}.ts`);
  return { game, characters: charactersModule.default };
};

const CharacterList = ({ params }: { params: Params }) => {
  const [gameData, setGameData] = useState<{
    game: Game;
    characters: BaseCharacter[];
  } | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchGameData(params.gameId);
      data ? setGameData(data) : notFound();
    };
    loadData();
  }, [params.gameId]);

  if (!gameData) return <div>Loading...</div>;

  const { game, characters } = gameData;

  return (
    <div>
      <h1 className="mb-2 text-center text-3xl font-bold">{game.title}</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {characters.map((character) => (
          <div
            key={character.id}
            className="relative mx-auto flex h-auto w-full justify-center rounded-lg bg-gray-800"
          >
            {character.img && character.img.length > 0 && (
              <img
                src={`/${game.id}/${character.img[0]}`} // Use the first image in the array
                alt={character.name}
                width={500}
                height={500}
                className="h-full w-full rounded-lg object-contain transition-all"
              />
            )}
            <h2 className="absolute bottom-0 w-full rounded-lg bg-black bg-opacity-60 p-1 text-center text-2xl font-semibold text-white">
              {character.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
