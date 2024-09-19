// app/[gameId]/character/page.tsx
import CharacterList from "@/components/CharacterList";
import games from "@/data/games";

interface Params {
  gameId: string;
}

const CharacterPage = ({ params }: { params: Params }) => {
  return <CharacterList params={params} />;
};

export const generateStaticParams = async () => {
  return games.map((game) => ({
    gameId: game.id,
  }));
};

export default CharacterPage;
