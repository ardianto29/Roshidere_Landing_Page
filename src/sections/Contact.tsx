import { useResponsive } from "../hooks/useResponsive";
import { Container, Form } from "../components";

import ImageFooter from "../../public/images/logoRoshidere.png";

export function Contact() {
  const bp = useResponsive([639, 767, 1023, 1279, 1535]);

  return (
    <footer id="Contact" className="relative mt-120 py-30 text-center">
      <Container>
        {(bp === 1535 || bp === 1279 || bp === -1) && (
          <h2 className="text-4xl font-extrabold leading-[.95] text-secondary">
            Contact <span className="text-primary">us</span>
          </h2>
        )}
        {bp && bp <= 1023 && (
          <h2 className="text-3xl font-extrabold leading-[.95] text-secondary">
            Contact <span className="text-primary">us</span>
          </h2>
        )}
        <h4 className="mb-15 mt-30 text-lg font-semibold">
          If you have any questions, please feel free to contact us.
        </h4>
        <Form className="mx-auto w-[35rem]" />
        <nav className="mt-60 text-secondary">
          <ul className="flex items-center justify-center gap-30 bp-sm:gap-10">
            <li>
              <a href="#Home" className="underline">
                Home
              </a>
            </li>
            <li>
              <a href="#About" className="underline">
                About
              </a>
            </li>
            <li className="mx-60 bp-sm:mx-20">
              <a href="/">
                <img
                  src={ImageFooter}
                  alt="logo"
                  className="size-90 w-64 h-[50%] bp-sm:size-60 bp-sm:w-40 bp-sm:h-24"
                />
              </a>
            </li>
            <li>
              <a href="#Characters" className="underline">
                Characters
              </a>
            </li>
            <li>
              <a href="#Events" className="underline">
                Events
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
