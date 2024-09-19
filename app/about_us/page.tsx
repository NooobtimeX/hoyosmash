import React from "react";
import type { Metadata } from "next"; // Import Metadata type

export const metadata: Metadata = {
  title: "About Us | HoYoSmash",
  description:
    "Learn more about HoYoSmash, the interactive way for players to rate their favorite characters.",
  openGraph: {
    title: "About Us | HoYoSmash",
    description:
      "Learn more about HoYoSmash, the interactive way for players to rate their favorite characters.",
    url: "https://hoyosmash.com/about_us",
    type: "website",
    images: [
      {
        url: "https://hoyosmash.com/favicon.ico",
        width: 800,
        height: 600,
        alt: "HoYoSmash",
      },
    ],
  },
};

const AboutUs: React.FC = () => {
  const images = [
    { src: "/game/honkai_impact_icon.webp", alt: "Honkai Impact" },
    { src: "/game/genshin_impact_icon.webp", alt: "Genshin Impact" },
    { src: "/game/honkai_star_rail_icon.webp", alt: "Honkai Star Rail" },
    { src: "/game/zenless_zone_zero_icon.webp", alt: "Zenless Zone Zero" },
  ];

  const statistics = [
    { value: "30", label: "HONKAI" },
    { value: "80", label: "GENSHIN" },
    { value: "50", label: "HSR" },
    { value: "20", label: "ZZZ" },
  ];

  return (
    <div className="relative py-4">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
        <div className="grid w-full grid-cols-1 items-center justify-start gap-12 lg:grid-cols-2">
          <div className="order-last grid w-full grid-cols-2 items-start justify-center gap-6 sm:grid-cols-2 lg:order-first">
            {images.map((image, index) => (
              <img
                key={index}
                className="rounded-xl object-cover"
                src={image.src}
                alt={image.alt}
                width={500}
                height={500}
              />
            ))}
          </div>
          <div className="inline-flex w-full flex-col items-center justify-center gap-10 lg:items-start">
            <div className="flex w-full flex-col items-start justify-center gap-6">
              <div className="flex w-full flex-col items-center justify-start gap-3 lg:items-start">
                <h1 className="font-manrope text-center text-4xl font-bold leading-normal lg:text-start">
                  HoYo<span className="text-4xl text-green-500">Smash</span>!
                </h1>
                <p className="text-center text-base font-normal leading-relaxed lg:text-start">
                  As avid fans of HoYoVerse, we wanted to create a fun,
                  interactive way for players to rate their favorite characters.{" "}
                  <span className="text-green-500">Smash</span> or{" "}
                  <span className="text-red-500">Pass</span> concept allows
                  users to share their thoughts, compare ratings, and engage in
                  friendly debates. Whether your&apos;e here to discover new
                  favorites or defend your beloved characters, this app is
                  designed for you!
                </p>
              </div>
              <h2 className="mx-auto -mb-2 text-center">Characters</h2>
              <div className="grid w-full grid-cols-2 items-center justify-center gap-5 sm:grid-cols-4 sm:gap-10 lg:justify-start">
                {statistics.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-start"
                  >
                    <h3 className="font-manrope text-center text-4xl font-bold leading-normal">
                      {stat.value}
                      <span className="text-4xl text-green-500">+</span>
                    </h3>
                    <h6 className="text-center text-base font-normal leading-relaxed">
                      {stat.label}
                    </h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
