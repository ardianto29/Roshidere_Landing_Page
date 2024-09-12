import { useEffect, useState } from "react";

function useResponsive(breakpoints: number[]): number | null {
  const [bp, setBp] = useState<number | null>(null);

  useEffect(() => {
    function updateBp() {
      const width = window.innerWidth;
      const newBp = breakpoints.find((bp: number) => width <= bp);
      setBp(newBp === undefined ? -1 : newBp);
    }

    updateBp();
    window.addEventListener("resize", updateBp);

    return () => window.removeEventListener("resize", updateBp);
  }, [breakpoints]);

  return bp;
}

export { useResponsive };
