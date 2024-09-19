import games from "@/data/games";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
export default function Games() {
  return (
    <div>
      <h2 className="my-2 text-center">All Hoyoverse Game</h2>
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
              <h3 className="text-center text-sm sm:text-base md:text-2xl">
                {game.title}
              </h3>
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
