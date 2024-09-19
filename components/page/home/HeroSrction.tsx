import Button from "@/components/ui/Button";

export default function HeroSrction() {
  return (
    <div className="mb-10 mt-2 rounded-xl text-white">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-green-600">HoYoSmash!</h1>
            <p className="0 m-2 text-lg leading-8">
              You receive Smash, I receive happiest!
              <br />
              What are you waiting for? Start smashing now!
            </p>
            <div className="m-2 flex items-center justify-center gap-x-6">
              <a href="/game">
                <Button variant="smash">SEE ALL →</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
