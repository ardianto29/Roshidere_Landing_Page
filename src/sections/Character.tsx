import { useResponsive } from "../hooks/useResponsive";
import { RevealImg } from "../components";
import { character } from "../mapping";

import Karakter1 from "../../public/images/kuze.jpg";

export function Character() {
  const bp = useResponsive([639, 767, 1023, 1279, 1535]);

  return (
    <section id="Characters" className="products relative mt-120 min-h-dvh">
      <div className="products__product--1 relative">
        <RevealImg bg={"background"} origin={origin} className="h-full w-full">
          <img
            src={Karakter1}
            alt="kuze"
            className="h-full w-full object-cover"
          />
        </RevealImg>
        <div className="absolute right-0 top-0 flex h-[6.5rem] w-[30%] items-center justify-center">
          {/* <span className="inline-block cursor-pointer text-[2.3rem]">
            <i className="ri-heart-3-line text-secondary"></i>
          </span> */}
        </div>
        <div className="absolute bottom-0 left-0 flex h-[6.5rem] w-[35^%] flex-col items-end justify-center gap-5 bg-background pr-3 text-end">
          <h4
            className={`text-secondary ${
              bp && bp > 639
                ? "text-lg font-semibold"
                : "text-base font-extrabold"
            }`}>
            Masachika Kuze
          </h4>
          <p className="text-base text-secondary"></p>
        </div>
      </div>

      {((bp && bp === 1535) || bp === 1279 || bp === -1) && (
        <h2 className="products__heading text-end text-4xl font-extrabold leading-[.95] text-secondary">
          Top-Character <br />
          <span className="text-primary">Roshidere</span>
        </h2>
      )}
      {bp && bp <= 1023 && (
        <h2 className="products__heading text-end text-3xl font-extrabold leading-[.95] text-secondary">
          Top-Character <br />
          <span className="text-primary">Roshidere</span>
        </h2>
      )}

      {character.map((character, index) => (
        <div
          key={index}
          className={`products__small ${character.className} relative`}>
          <RevealImg
            bg={"background"}
            origin={character.origin}
            className="h-full w-full">
            <img
              src={character.src}
              alt={character.alt}
              className="h-full w-full object-cover"
            />
          </RevealImg>
          <div
            className={`absolute ${character.position.heading} flex h-[6.5rem] w-[30%] items-center justify-center`}>
            {/* <span className="inline-block cursor-pointer text-[2.3rem]">
              <i className="ri-heart-3-line text-secondary"></i>
            </span> */}
          </div>
          <div
            className={`absolute ${character.position.details} flex h-[6.5rem] w-[35%] flex-col items-end justify-center gap-5 bg-background pr-3 text-end`}>
            <h4
              className={`text-secondary ${
                bp && bp > 639
                  ? "text-lg font-semibold"
                  : "text-base font-extrabold"
              }`}>
              {character.name}
            </h4>
            <p className="text-base font-bold text-secondary"></p>
          </div>
        </div>
      ))}
    </section>
  );
}
