import { useResponsive } from "../hooks/useResponsive";
import { Container, Form } from "../components";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import ImageFooter from "../../public/images/logoRoshidere.png";
import { useInView } from "react-intersection-observer";

export function Contact() {
  const bp = useResponsive([639, 767, 1023, 1279, 1535]);

  // Control animation based on scroll
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 10% of the footer is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  // Variants for fade-up animation
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <footer
      id="Contact"
      className="relative mt-120 py-30 text-center"
      ref={ref} // Reference for triggering animation when in view
    >
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

        {/* Navigation with fade-up animation */}
        <motion.nav
          className="mt-60 text-secondary"
          initial="hidden"
          animate={controls}
          variants={fadeUpVariants}>
          <ul className="flex items-center justify-center gap-30 bp-sm:gap-10">
            <motion.li variants={fadeUpVariants}>
              <a href="#Home" className="underline">
                Home
              </a>
            </motion.li>
            <motion.li variants={fadeUpVariants}>
              <a href="#About" className="underline">
                About
              </a>
            </motion.li>
            <motion.li className="mx-60 bp-sm:mx-20" variants={fadeUpVariants}>
              <a href="/">
                <img
                  src={ImageFooter}
                  alt="logo"
                  className="size-90 w-64 h-[50%] bp-sm:size-60 bp-sm:w-40 bp-sm:h-24"
                />
              </a>
            </motion.li>
            <motion.li variants={fadeUpVariants}>
              <a href="#Characters" className="underline">
                Characters
              </a>
            </motion.li>
            <motion.li variants={fadeUpVariants}>
              <a href="#Events" className="underline">
                Events
              </a>
            </motion.li>
          </ul>
        </motion.nav>
      </Container>
    </footer>
  );
}
