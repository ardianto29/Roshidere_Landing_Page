import { useRef } from "react";
import { Button, RevealImg, Container } from "../components";
import { useResponsive } from "../hooks/useResponsive";
import { pics } from "../mapping";

export function About() {
  const container = useRef(null);
  const bp = useResponsive([639, 767, 1023, 1279, 1535]);

  return (
    <section
      id="About"
      className="relative mt-[230px] flex min-h-screen items-center justify-center"
      ref={container}>
      <Container>
        <div className="space-y-40 text-center">
          <div className="space-y-30">
            {(bp === 1535 || bp === 1279 || bp === -1) && (
              <h2 className="text-4xl font-extrabold leading-tight text-secondary">
                時々ボソッと
                <span className="text-primary">
                  ロシア語でデレる隣のアーリャさん
                </span>
              </h2>
            )}
            {bp && bp <= 1023 && (
              <h2 className="text-3xl font-extrabold leading-[.95] text-secondary">
                時々ボソッと
                <span className="text-primary">
                  ロシア語でデレる隣のアーリャさん
                </span>
              </h2>
            )}
            <p className="mx-auto w-full max-w-[790px] font-medium leading-relaxed text-background mix-blend-difference">
              Alisa Mikhailovna Kujou, nicknamed Alya, is a high school girl
              with silver hair who looks so beautiful that she turns heads
              wherever she goes. Masachika Kuze, who sits next to Alya, is an
              unmotivated student who just stays up late at night and is a
              sleepyhead at school. Alya often complains about Masachika but
              seems to be secretly in love with him, and occasionally makes
              flirtatious remarks in her native Russian language. However, she
              does not realize that Masachika understands Russian, and her
              flirty comments towards him constantly leave him perplexed and
              weirded out.
            </p>
          </div>
          <div className="space-x-30">
            <Button
              className={`border-2 border-transparent bg-primary text-background`}>
              <a href="#Character">Character</a>
            </Button>
            <Button className={`border-[2px] border-primary text-primary`}>
              <a href="#Events">Our Events</a>
            </Button>
          </div>
        </div>

        {pics.map(({ src, bottom, right, left, top, origin }, i) => (
          <RevealImg
            className={`absolute ${bottom ?? top} ${left ?? right} -z-10 ${
              bp && bp >= 1023 ? "scale-[.6]" : "w-[25vw]"
            } } }`}
            origin={origin}
            key={i}
            bg={"background"}
            container={container}>
            <img
              src={src}
              alt="karakter"
              className="block h-full w-full object-cover"
            />
          </RevealImg>
        ))}
      </Container>
    </section>
  );
}
