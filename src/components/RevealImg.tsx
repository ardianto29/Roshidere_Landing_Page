import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface RevealImgProps {
  children: ReactNode;
  className?: string;
  origin?: string;
  bg?: string;
  container?: React.RefObject<HTMLDivElement>;
}

export function RevealImg({
  children,
  className,
  origin,
  bg,
  container,
}: RevealImgProps) {
  const ref = useRef(container?.current || null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  return (
    <div className={`${className} overflow-hidden`} ref={ref}>
      <motion.div
        animate={{
          [origin === "left" || origin === "right" ? "scaleX" : "scaleY"]:
            isInView ? 0 : 1,
          transformOrigin: origin,
          transition: { duration: 1.1, ease: [0, 0.55, 0.45, 1] },
        }}
        className={`absolute left-0 top-0 z-30 h-full w-full bg-${bg}`}
      />
      <motion.div
        animate={{
          scale: isInView ? 1 : 1.5,
          transition: {
            duration: 1.3,
            ease: [0, 0.55, 0.45, 1],
          },
        }}
        className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
