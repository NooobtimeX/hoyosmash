import Button from "@/components/ui/Button";
export default function Feature() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="m-auto grid max-w-md">
        <h2 className="text-2xl font-bold">
          <span className="text-3xl text-green-500">SMASH</span> or{" "}
          <span className="text-3xl text-red-500">PASS</span> ?
        </h2>
        <p className="mx-auto">
          <a href="/" className="text-white hover:text-green-500">
            hoyosmash.com
          </a>{" "}
          provides an entertaining way to engage in a Smash or Pass game
          featuring your favorite video game characters.
        </p>
        <div className="mx-auto mb-4 mt-2 flex">
          <a href="/game">
            <button className="bg-white text-gray-900 hover:bg-green-500">
              SEE ALL →
            </button>
          </a>{" "}
        </div>
      </div>
      <div>
        <div className="relative mx-auto flex h-64 w-64 justify-center rounded-lg bg-gray-800">
          <img
            src={"/honkai_star_rail/acheron.webp"}
            alt={"wdwd"}
            width={1000}
            height={1000}
            className={"h-full w-full cursor-pointer rounded-lg object-contain"}
          />
          <h2 className="absolute bottom-0 w-full rounded-lg bg-black bg-opacity-60 p-1 text-center text-2xl font-semibold text-white">
            Acheron
          </h2>
          <div className="absolute right-1 top-1 rounded-lg bg-black bg-opacity-60 p-1 text-sm text-white">
            {"1"} / {"100"}
          </div>
        </div>
        <div className="my-1 flex justify-center space-x-2">
          <div>
            <Button variant="smash">SMASH</Button>
          </div>
          <div>
            <Button variant="pass">PASS</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
