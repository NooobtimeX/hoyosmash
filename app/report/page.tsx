"use client";

import React, { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import games from "@/data/games";

interface Game {
  id: string;
  title: string;
}

interface AllReportProps {
  games: Game[];
}

const AllReport = ({ games }: AllReportProps) => {
  const [gamesWithReports, setGamesWithReports] = useState<Game[]>([]);

  useEffect(() => {
    const getGamesWithReports = () => {
      setGamesWithReports(games);
    };

    getGamesWithReports();
  }, [games]);

  return (
    <div>
      <h1 className="mb-2 text-center text-2xl font-bold">
        <span className="text-3xl text-green-500">SMASH</span> or{" "}
        <span className="text-3xl text-red-500">PASS </span>
        <br />
        Report
      </h1>
      <div className="min-h-screen p-6">
        <div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {gamesWithReports.map((game) => (
              <Card key={game.id}>
                <img
                  src={"/game/" + game.id + ".webp"}
                  alt={game.title}
                  className="rounded-xl"
                  width={900}
                  height={900}
                />
                <div className="flex justify-center">
                  <a href={"/report/" + game.id}>
                    <Button variant="smash">View Report</Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main AllGameReportPage component
const AllGameReportPage = () => {
  return (
    <div className="container mx-auto p-4">
      <link rel="canonical" href={"https://hoyosmash.com/report"} />
      <h1 className="mb-6 text-center text-3xl font-bold">All Game Reports</h1>
      <p className="mb-4 text-center text-lg">
        Discover all reports and ratings from various games. Join the fun and
        rate your favorite characters!
      </p>
      <AllReport games={games} />
    </div>
  );
};

export default AllGameReportPage;
