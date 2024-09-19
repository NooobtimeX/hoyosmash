import Report from "@/components/Report";
import games from "@/data/games";
import { notFound } from "next/navigation";

interface Params {
  gameId: string;
}

// Main ReportPage component
const ReportPage = async ({ params }: { params: Params }) => {
  const game = games.find((g) => g.id === params.gameId);

  // Handling game not found
  if (!game) {
    return notFound(); // Use notFound for handling undefined game
  }

  // Dynamically import the characters module for the specified game
  const charactersModule = await import(`@/data/${game.id}.ts`);
  const characters = charactersModule.default;

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-center text-3xl font-bold">
        {game.title} - Smash or Pass
      </h1>
      <p className="mb-4 text-center text-lg">
        Welcome to the report page for {game.title}! Here, you can view and rate
        your favorite characters.
      </p>
      <p className="text-md mb-6 text-center text-gray-700">
        Choose wisely! Rate the characters based on your preferences and see how
        they stack up against others.
      </p>
      <Report characters={characters} game={game.id} gameName={game.title} />
    </div>
  );
};

// Generate static parameters for the report page
export const generateStaticParams = async () => {
  return games.map((game) => ({
    gameId: game.id,
  }));
};

export default ReportPage;
