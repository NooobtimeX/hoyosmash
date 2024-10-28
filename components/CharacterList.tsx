"use client";

import { BaseCharacter, Game } from "@/types";

interface CharacterListProps {
  gameData: {
    game: Game;
    characters: BaseCharacter[];
  };
}

const CharacterList = ({ gameData }: CharacterListProps) => {
  const { game, characters } = gameData;

  return (
    <div>
      <h1 className="mb-2 text-center text-3xl font-bold">{game.title}</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {characters.map((character: BaseCharacter) => (
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
            <h2 className="absolute bottom-0 w-full rounded-lg bg-black bg-opacity-60 p-1 text-center text-base font-semibold text-white">
              {character.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
