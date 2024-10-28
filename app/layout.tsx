import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import AnimatedLayout from "@/components/ClientRootLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://hoyosmash.com"),
  robots: "index, follow",
  verification: {
    google: "ueMupusktYEyfsC9h8Yq6SBpjeXEROyEULHrsR1tjMk",
  },
  title: "HoYoSmash! | Smash or Pass & Hoyoverse Characters",
  description:
    "Join HoYoSmash! and play Smash or Pass with your favorite characters from Genshin Impact, Honkai Impact, and more. Make your choices wisely and enjoy engaging gameplay with fellow fans!",
  keywords:
    "HoYoverse, Smash or Pass, character ratings, Genshin Impact, Honkai Impact, Honkai Star Rail, Zenless Zone Zero, interactive gaming, community engagement, fan discussions",
  openGraph: {
    title: "HoYoSmash! | Smash or Pass & Hoyoverse Characters",
    description:
      "Join HoYoSmash! and play Smash or Pass with your favorite characters from Genshin Impact, Honkai Impact, and more. Make your choices wisely and enjoy engaging gameplay with fellow fans!",
    url: "https://hoyosmash.com",
    images: "https://hoyosmash.com/favicon.ico",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HoYoSmash! | Smash or Pass & Hoyoverse Characters",
    description:
      "Join HoYoSmash! and play Smash or Pass with your favorite characters from Genshin Impact, Honkai Impact, and more. Make your choices wisely and enjoy engaging gameplay with fellow fans!",
    images: "https://hoyosmash.com/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-6034794215506479" />
        <meta name="genre" content="game" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6034794215506479"
          crossOrigin="anonymous"
        ></script>
        <GoogleTagManager gtmId="GTM-PZWCWFHL" />
      </head>
      <body>
        <AnimatedLayout>{children}</AnimatedLayout>
      </body>
    </html>
  );
}
