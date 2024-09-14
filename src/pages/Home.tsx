import { About } from "../sections/About";
import { Character } from "../sections/Character";
import { Hero } from "../sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <About />
        <Character />
      </main>
    </>
  );
}
