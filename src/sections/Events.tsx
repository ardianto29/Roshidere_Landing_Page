import { useEffect } from "react";
import { useResponsive } from "../hooks/useResponsive";
import { Button, RevealImg, Container } from "../components";
import Aos from "aos";
import "aos/dist/aos.css";

import imageEvent1 from "../../public/images/LN_Slider.webp";
import imageEvent2 from "../../public/images/Characters_Slider.webp";

export function Events() {
  const bp = useResponsive([639, 767, 1023, 1279, 1535]);

  useEffect(() => {
    Aos.init({
      once: false,
    });
  });

  return (
    <section id="Events" className="relative mt-120 min-h-dvd space-y-30">
      <Container>
        {(bp === 1535 || bp === 1279 || bp === -1) && (
          <h2 className="text-center text-4xl font-extrabold leading-[.95] text-secondary">
            Adapted from a<span className="text-primary"> Novel into </span>
            <span className="text-primary"> an Anime</span>
          </h2>
        )}
        {bp && bp <= 1023 && (
          <h2 className="text-center text-3xl font-extrabold leading-[.95] text-secondary">
            Adapted from a<span className="text-primary"> Novel into </span>
            <span className="text-primary"> an Anime</span>
          </h2>
        )}
      </Container>
      <div className="grid grid-cols-2 gap-y-60 bp-sm:grid-cols-1 bp-sm:px-5 bp-sm:gap-y-0">
        {bp && bp <= 639 && (
          <RevealImg className={"relative"} bg={"primary"} origin={"origin"}>
            <img
              src={imageEvent1}
              alt="event1"
              className="h-full w-full object-cover"
            />
          </RevealImg>
        )}
        <div className="flex flex-col justify-center bg-primary p-30 bp-sm:mb-60 text-background bp-md:px-10">
          <h3
            className="text-2xl leading-[.95] bp-md:text-xl"
            data-aos="fade-right">
            Light novel
          </h3>
          <p
            className="mb-30 mt-20 max-w-[80%] leading-relaxed bp-md:w-full bp-sm:max-w-full"
            data-aos="fade-right">
            The light novel series is written by SunSunSun and illustrated by
            Momoco. In June 2020, SunSunSun first received an invitation from
            Kadokawa Sneaker Bunko for whether the imprint could publish the
            work. On December 22, 2020, it was announced the short stories
            published on Shōsetsuka ni Narō would be published by Kadokawa
            Shoten under their Kadokawa Sneaker Bunko imprint after being
            adapted as a series. The title of the series follows the title of
            one of the two short stories.The first volume was published on
            February 27, 2021. As of August 2024, nine volumes and one short
            story volume have been released. At Sakura-Con 2022, Yen Press
            announced that they licensed the series for English publication.
          </p>
          <Button className="bg-secondary text-background">Read More</Button>
        </div>
        {bp && bp > 639 && (
          <RevealImg className={"relative"} bg={"primary"} origin={"origin"}>
            <img
              src={imageEvent1}
              alt="event1"
              className="h-full w-full object-cover"
            />
          </RevealImg>
        )}
        <RevealImg className={"relative"} bg={"primary"} origin={"left"}>
          <img
            src={imageEvent2}
            alt="event2"
            className="h-full w-full object-cover"
          />
        </RevealImg>
        <div className="flex flex-col items-end justify-center bg-primary p-30 text-background bp-md:px-10 bp-sm:items-start bp-sm:text-start">
          <h3
            className="text-2xl leading-[.95]  bp-md:text-xl"
            data-aos="fade-left">
            Anime
          </h3>
          <p
            className="mb-30 mt-20 max-w-[78%] leading-relaxed bp-md:max-w-full bp-sm:max-w-[100%] "
            data-aos="fade-left">
            An anime television series adaptation was announced on March 17,
            2023. It is produced by Doga Kobo and written and directed by Ryota
            Itoh, with character designs handled by Yūhei Murota, who also
            served as chief animation director, and music composed by Hiroaki
            Tsutsumi. Ryō Kobayashi served as the producer. The series was
            originally scheduled for April 2024, but was later delayed, and
            eventually premiered on July 3, 2024, on Tokyo MX and other
            networks, and is set to run for 12 episodes. The opening theme is
            "Ichiban Kagayaku Hoshi" (1番輝く星, "The Brightest Star"), while
            each episode features a different ending theme song based on covers
            of different famous songs, all performed by Sumire Uesaka as her
            character Alya. Crunchyroll licensed the series. Medialink licensed
            the series for streaming in Southeast Asia and Oceania (except
            Australia and New Zealand) on its Ani-One Asia YouTube channel.
          </p>
          <Button className="bg-secondary text-background"> Watch Now</Button>
        </div>
      </div>
    </section>
  );
}
