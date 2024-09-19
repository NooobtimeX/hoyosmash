"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import html2canvas from "html2canvas";
import Button from "@/components/ui/Button";

interface MediaDetailPageProps {
  characters: BaseCharacter[];
  game: string;
  gameName: string;
}

const ReportComponent = ({
  characters,
  game,
  gameName,
}: MediaDetailPageProps) => {
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState<number>(0);
  const [userSelections, setUserSelections] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedIndex = localStorage.getItem(`${game}_currentCharacterIndex`);
      setCurrentCharacterIndex(savedIndex ? parseInt(savedIndex, 10) : 0);
      const savedSelections = localStorage.getItem(`${game}_selections`);
      setUserSelections(savedSelections ? JSON.parse(savedSelections) : []);
    }
  }, [game]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        `${game}_currentCharacterIndex`,
        currentCharacterIndex.toString(),
      );
    }
  }, [currentCharacterIndex, game]);

  const handleRestart = () => {
    setCurrentCharacterIndex(0);
    setUserSelections([]);
    if (typeof window !== "undefined") {
      localStorage.removeItem(`${game}_currentCharacterIndex`);
      localStorage.removeItem(`${game}_selections`);
      localStorage.removeItem(`${game}_all_selected`);
    }
    router.push(`/${game}`); // Navigate to the game page
  };

  const totalSelectedIds = new Set(
    userSelections.map((sel) => parseInt(sel.split(":")[0])),
  );
  const unselectedCharacters = characters.filter(
    (char) => !totalSelectedIds.has(char.id),
  );

  const handleSaveReport = async () => {
    const reportElement = document.getElementById("report");
    if (reportElement) {
      const canvas = await html2canvas(reportElement, {
        scale: 3, // Adjust scale based on device pixel ratio
        useCORS: true, // Enable cross-origin resource sharing
        backgroundColor: null, // Transparent background
      });
      const dataUrl = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataUrl;
      link.download = `${game}_report.png`;
      link.click();
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center p-2">
      <div className="w-full max-w-4xl py-6">
        <h2 className="mb-4 text-center text-3xl font-semibold">Report</h2>
        <div className="grid">
          <div onClick={handleRestart}>
            <Button variant="pass">Restart</Button>
          </div>
          <div
            onClick={handleSaveReport} // Add save button
          >
            <Button variant="smash">Save as PNG</Button>
          </div>
        </div>
        <div id="report" className="bg-gray-900">
          <div className="mx-2 mb-2">
            <h1 className="m-1 mb-3 text-center text-3xl font-bold">
              {gameName}
            </h1>
            {unselectedCharacters.length > 0 && (
              <div className="mb-1 rounded-lg bg-gray-800 p-4 shadow-md">
                <h3 className="mb-2 text-xl font-semibold">
                  Unselected Characters
                </h3>
                <div className="grid grid-cols-3 gap-1 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10">
                  {unselectedCharacters.map((char) => (
                    <div
                      key={char.id}
                      className="mx-auto overflow-hidden rounded-md bg-gray-900 p-1"
                    >
                      <img
                        src={`/${game}/${char.img}`}
                        alt={char.name}
                        className="m-auto rounded-xl object-contain"
                        width={500}
                        height={500}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
              {["smash", "pass"].map((type) => (
                <div
                  key={type}
                  className="rounded-lg bg-gray-800 p-4 shadow-md"
                >
                  <h3 className="mb-2 text-xl font-semibold">{`${
                    type.charAt(0).toUpperCase() + type.slice(1)
                  } Characters`}</h3>
                  <div className="grid grid-cols-3 gap-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {characters
                      .filter((char) =>
                        userSelections.some((sel) =>
                          sel.startsWith(`${char.id}:${type}`),
                        ),
                      )
                      .map((char) => (
                        <div
                          key={char.id}
                          className="mx-auto max-h-20 w-full overflow-hidden rounded-md bg-gray-900 p-1"
                        >
                          <img
                            src={`/${game}/${char.img}`}
                            alt={char.name}
                            className="m-auto h-full rounded-xl object-contain"
                            width={500}
                            height={500}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportComponent;
