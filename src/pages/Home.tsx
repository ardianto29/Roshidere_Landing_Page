import { About } from "../sections/About";
import { Character } from "../sections/Character";
import { Events } from "../sections/Events";
import { Hero } from "../sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="overflow-x-hidden">
        <About />
        <Character />
        <Events />
      </main>
    </>
  );
}
