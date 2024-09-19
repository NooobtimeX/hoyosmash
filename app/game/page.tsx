import games from "@/data/games";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
export default function ReportPage() {
  return (
    <div>
      <h1 className="my-2 text-center">Play smash with this games</h1>
      <div className="container mx-auto mb-4 px-4">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4">
          {games.map((game, index) => (
            <Card key={index}>
              <div className="px-2 pt-1">
                <a href={game.link}>
                  <img
                    alt={game.title}
                    src={game.icon}
                    className="mx-auto max-h-40 rounded-xl"
                    width={200}
                    height={200}
                  />
                </a>
              </div>
              <h2 className="text-center text-sm sm:text-base md:text-2xl">
                {game.title}
              </h2>
              <div className="flex justify-center">
                <a href={game.link}>
                  <Button variant="smash">SMASH!</Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
