import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useResponsive } from "../hooks/useResponsive";
import { Button, Container, Form } from "../components";

import imageHero1 from "../../public/images/bannerAlya.jpeg";
import imageHero2 from "../../public/images/logoRoshidere.png";

export function Hero() {
  const bp = useResponsive([639, 767, 1023, 1279, 1535]);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const parentVariants = {
    initial: { height: "0%", transformOrigin: "button" },
    animate: {
      height: "100%",
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.08,
        when: "beforeChildren",
      },
    },

    exit: {
      height: "0%",
      transformOrigin: "button",
      transition: {
        duration: 0.9,
        delay: 0.3,
        ease: [0.33, 1, 0.68, 1],
        staggerChildren: 0.05,
      },
    },
  };

  const childVariants = {
    initial: { y: "30%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    exit: { opacity: 0 },
  };

  function handleOpenMenu() {
    setIsNavOpen((prev) => !prev);
  }

  function handleScrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="Home" className="relative min-h-screen text-background">
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            variants={parentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 z-40 flex h-full w-full flex-col justify-center gap-20 bg-primary pl-90 text-3xl text-background">
            <motion.div
              onClick={handleOpenMenu}
              variants={childVariants}
              className="absolute left-20 top-10 cursor-pointer">
              <i className="ri-close-large-line"></i>
            </motion.div>

            <motion.div variants={childVariants} onClick={handleOpenMenu}>
              <a href="#Home">Home</a>
            </motion.div>
            <motion.div variants={childVariants} onClick={handleOpenMenu}>
              <a href="#About">About</a>
            </motion.div>
            <motion.div variants={childVariants} onClick={handleOpenMenu}>
              <a href="#Characters">Waifu</a>
            </motion.div>
            <motion.div variants={childVariants} onClick={handleOpenMenu}>
              <a href="#Events">Events</a>
            </motion.div>
            <motion.div variants={childVariants} onClick={handleOpenMenu}>
              <a href="#Contact">Contact</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute inset-0 left-1/2 top-1/2 h-[95%] w-[95%] -translate-x-1/2 -translate-y-1/2">
        <motion.img
          src={imageHero1}
          alt=""
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.3 }}
          className="absolute inset-0 h-[110%] w-full object-cover"
        />

        <div className="absolute left-0 top-0 h-[110%] w-full bg-primary--op " />

        <div className="relative z-50 h-full">
          {bp && bp >= 768 ? (
            <nav className="relative flex items-center justify-between space-y-6">
              <div className="absolute left-1/2 z-50 -translate-x-1/2">
                <img
                  src={imageHero2}
                  alt="logo"
                  className="size-[70%] translate-x-[20%] translate-y-[35%]"
                />
              </div>

              <div
                onClick={handleOpenMenu}
                className="nav__menu after:lef-1/2 relative ml-6 size-[5rem] cursor-pointer rounded-full border-[2px] border-background"
              />
              {/* <Form className="-translate-y-5 rounded-md bg-background px-6 py-9" /> */}
            </nav>
          ) : (
            <Container>
              <nav className="relative flex items-center justify-between pt-5">
                <div>
                  <img src={imageHero2} alt="logo" className="size-90" />
                </div>
                <div
                  onClick={handleOpenMenu}
                  className="nav__menu after:lef-1/2 relative ml-6 size-[5rem] cursor-pointer rounded-full border-[2px] border-background"
                />
              </nav>
            </Container>
          )}

          {(bp === 1535 || bp === -1) && (
            <h1 className="absolute left-1/2 top-[55%] mx-auto -translate-x-1/2 -translate-y-1/2 text-center text-[3rem] font-extrabold">
              Tokidoki Bosotto Roshiago de <br /> Dereru Tonari no Arya-san
            </h1>
          )}

          {bp === 1023 && (
            <h1 className="absolute left-1/2 top-[55%] w-full -translate-x-1/2 -translate-y-1/2 text-center text-[2.5rem] font-extrabold">
              Tokidoki Bosotto Roshiago de <br /> Dereru Tonari no Arya-san
            </h1>
          )}

          {bp && bp <= 767 && (
            <div className="absolute left-1/2 top-1/2 mx-auto -translate-x-1/2 -translate-y-1/2 space-y-30">
              <h1 className="text-center text-2xl font-extrabold">
                Tokidoki Bosotto Roshiago de <br /> Dereru Tonari no Arya-san
              </h1>
              {/* <Form className="mx-auto w-[98%] max-w-[30rem]" /> */}
            </div>
          )}
          <Button
            type="link"
            href={"#Characters"}
            className="absolute -bottom-[10.5%] left-1/2 -translate-x-1/2 rounded-md bg-background p-10 text-secondary">
            CHARACTER
          </Button>
        </div>
      </div>

      {isVisible && (
        <div
          className="fixed bottom-5 left-5 z-50 flex size-[5rem] cursor-pointer items-center justify-center rounded-full bg-primary text-[2.6rem] shadow-2xl"
          onClick={handleScrollTop}>
          <i className="ri-arrow-up-line"></i>
        </div>
      )}
    </header>
  );
}
