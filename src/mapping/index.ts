import Pic1 from "../../public/images/Alya3.jpg";
import Pic2 from "../../public/images/Yuki.jpg";
import Pic3 from "../../public/images/Masha2.jpg";
// import Pic4 from "../../public/images/kuze.jpg";
import Pic5 from "../../public/images/Ayano1.jpg";

import Karakter2 from "../../public/images/LN_Slider.webp";
import Karakter3 from "../../public/images/yuki3.png";
import Karakter4 from "../../public/images/masha.jpg";
import Karakter5 from "../../public/images/ayano2.png";

export const pics = [
  {
    src: Pic1,
    bottom: "-bottom-120",
    right: "right-[4vw]",
    origin: "bottom",
  },

  {
    src: Pic2,
    left: "left-[1vw]",
    bottom: "bottom-10",
    origin: "left",
  },

  {
    src: Pic3,
    left: "left-[7vw]",
    top: "-top-[17.8rem]",
    origin: "top",
  },

  {
    src: Pic5,
    right: "right-0",
    top: "-top-[15vw]",
    origin: "right",
  },

  //   {
  //     src: Pic4,
  //     top: "-top-[15vw]",
  //     right: "right-[4vw]",
  //     origin: "center",
  //   },
];

export const character = [
  {
    className: "products__product--2",
    src: Karakter2,
    alt: "kar2",
    name: "Alisa Mikhailovna Kujou",
    origin: "bottom",
    position: { details: "bottom-0 left-0" },
  },
  {
    className: "products__product--3",
    src: Karakter3,
    alt: "kar3",
    name: "Yuki Suou",
    origin: "right",
    position: { heading: "right-0 top-0", details: "bottom-0 left-0" },
  },
  {
    className: "products__product--4",
    src: Karakter4,
    alt: "kar4",
    name: "Maria Mikhailovna Kujou",
    origin: "left",
    position: { heading: "right-0 top-0", details: "bottom-0 left-0" },
  },
  {
    className: "products__product--5",
    src: Karakter5,
    alt: "kar5",
    name: "Ayano Kimishima",
    origin: "top",
    position: { heading: "right-0 top-0", details: "bottom-0 left-0" },
  },
];
