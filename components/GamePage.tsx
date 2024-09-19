"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

interface Game {
  id: string;
  title: string;
  description: string;
  imgSrc?: string;
}

interface Character {
  id: number;
  name: string;
  img?: string;
}

const GamePage = ({
  gameData,
}: {
  gameData: { game: Game; characters: Character[] };
}) => {
  const [currentCharacterIndex, setCurrentCharacterIndex] =
    useState<number>(-1);
  const [, setUserSelections] = useState<string[]>([]);
  const [showReport, setShowReport] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedIndex = localStorage.getItem(
        `${gameData.game.id}_currentCharacterIndex`,
      );
      const savedSelections = localStorage.getItem(
        `${gameData.game.id}_selections`,
      );
      const allSelected = localStorage.getItem(
        `${gameData.game.id}_all_selected`,
      );

      setCurrentCharacterIndex(savedIndex ? parseInt(savedIndex, 10) : -1);
      setUserSelections(savedSelections ? JSON.parse(savedSelections) : []);
      setShowReport(allSelected === "true");
    }
  }, [gameData]);

  const nextCharacter = () => {
    setCurrentCharacterIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % gameData.characters.length;
      if (newIndex === 0) {
        setShowReport(true);
        if (typeof window !== "undefined") {
          localStorage.setItem(`${gameData.game.id}_all_selected`, "true");
        }
      }
      return newIndex;
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        `${gameData.game.id}_currentCharacterIndex`,
        currentCharacterIndex.toString(),
      );
    }
  }, [currentCharacterIndex, gameData]);

  const handleSelection = (
    characterId: number,
    selection: "smash" | "pass",
  ) => {
    setUserSelections((prev) => {
      const updatedSelections = prev.filter(
        (sel) => !sel.startsWith(`${characterId}:`),
      );
      updatedSelections.push(`${characterId}:${selection}`);
      if (typeof window !== "undefined") {
        localStorage.setItem(
          `${gameData.game.id}_selections`,
          JSON.stringify(updatedSelections),
        );
      }
      return updatedSelections;
    });
    nextCharacter();
  };

  const handleStart = () => setCurrentCharacterIndex(0);

  const handleReset = () => {
    setCurrentCharacterIndex(-1);
    setUserSelections([]);
    setShowReport(false);
    if (typeof window !== "undefined") {
      localStorage.removeItem(`${gameData.game.id}_currentCharacterIndex`);
      localStorage.removeItem(`${gameData.game.id}_selections`);
      localStorage.removeItem(`${gameData.game.id}_all_selected`);
    }
  };

  const currentCharacter = gameData.characters[currentCharacterIndex];

  return (
    <div className="mb-6 flex flex-col items-center px-4">
      <h1 className="mb-2 text-center text-3xl font-bold">
        {gameData.game.title}
      </h1>
      {showReport ? (
        <div className="m-auto grid w-full max-w-4xl px-4 py-6">
          <p className="text-center">
            You have selected all characters already.
          </p>
          <a href={`/${gameData.game.id}/report`} className="mx-auto mt-4">
            <Button variant="smash">See report!</Button>
          </a>
          <div onClick={handleReset} className="flex justify-center space-x-2">
            <Button variant="pass">RESTART</Button>
          </div>
        </div>
      ) : (
        <div>
          {currentCharacterIndex === -1 ? (
            <div className="mb-20 grid place-items-center">
              <div className="grid text-center">
                <h2>Smash or Pass!</h2>
                {gameData.game.imgSrc && (
                  <img
                    src={gameData.game.imgSrc}
                    alt={`${gameData.game.title} image`}
                    width={400}
                    height={400}
                    className="mx-auto rounded-lg"
                  />
                )}
                <span className="max-w-xl text-base text-gray-200">
                  {gameData.game.description}
                </span>
                <p className="text-base text-gray-400">Press start to begin</p>
                <div onClick={handleStart}>
                  <Button variant="smash">SMASH!</Button>
                </div>
              </div>
            </div>
          ) : currentCharacter ? (
            <div>
              <div className="relative mx-auto flex h-80 w-80 justify-center rounded-lg bg-gray-800">
                {currentCharacter.img && (
                  <img
                    src={`/${gameData.game.id}/${currentCharacter.img}`}
                    alt={currentCharacter.name}
                    width={1000}
                    height={1000}
                    className="h-full w-full cursor-pointer rounded-lg object-contain"
                  />
                )}
                <h2 className="absolute bottom-0 w-full rounded-lg bg-black bg-opacity-60 p-1 text-center text-2xl font-semibold text-white">
                  {currentCharacter.name}
                </h2>
                <div className="absolute right-1 top-1 rounded-lg bg-black bg-opacity-60 p-1 text-sm text-white">
                  {currentCharacterIndex + 1} / {gameData.characters.length}
                </div>
              </div>
              <div className="mt-3 flex justify-center space-x-2">
                <div
                  onClick={() => handleSelection(currentCharacter.id, "smash")}
                >
                  <Button variant="smash">SMASH</Button>
                </div>
                <div
                  onClick={() => handleSelection(currentCharacter.id, "pass")}
                >
                  <Button variant="pass">PASS</Button>
                </div>
              </div>
              <div
                onClick={handleReset}
                className="flex justify-center space-x-2"
              >
                <Button variant="pass">RESTART</Button>
              </div>
            </div>
          ) : (
            <p className="text-lg text-gray-700">No character available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default GamePage;
