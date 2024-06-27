import Navbar from "@/components/Navbar";
import About from "@/components/landing-page/About";
import AnimatedText from "@/components/landing-page/AminatedText";
import Hero from "@/components/landing-page/Hero";
export default function Home() {
  return (
    <main className="flex flex-col min-h-full justify-between p-5 ">
      <Navbar />
      {/*<AnimatedText />*/}
      <Hero />
      <About />
    </main>
  );
}
