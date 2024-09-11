import { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | "link";
  children: ReactNode;
  className?: string;
  href?: string;
}

export function Button({
  type = "button",
  children,
  className = "",
  href = "#",
}: ButtonProps) {
  if (type === "link") {
    return (
      <a href={href} className={`${className} font-semibold underline`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`w-[13rem] text-lg rounded-md py-15 ${className}`}>
      {children}
    </button>
  );
}
