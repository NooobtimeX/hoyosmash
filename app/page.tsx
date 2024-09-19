import HeroSrction from "@/components/page/home/HeroSrction";
import Games from "@/components/page/home/Games";
import Feature from "@/components/page/home/Feature";
import AboutUs from "@/components/page/home/AboutUs";
import LatestPosts from "@/components/page/home/LatestPosts";

export default async function HomePage() {
  return (
    <div>
      <link rel="canonical" href="https://hoyosmash.com" />
      <HeroSrction />
      <Games />
      <Feature />
      <AboutUs />
      <LatestPosts />
    </div>
  );
}
