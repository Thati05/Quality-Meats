import Navbar from "@/components/Navbar";
import About from "@/components/landing-page/About";
import AnimatedText from "@/components/landing-page/AminatedText";
import Explore from "@/components/landing-page/Explore";
import Hero from "@/components/landing-page/Hero";
export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      {/*<AnimatedText />*/}
      <Hero />
      <About />
      <Explore />
    </main>
  );
}
