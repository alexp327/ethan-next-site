import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

type GhostButtonProps = {
  text: string;
  secondaryColor?: boolean;
  className?: string;
  href?: Url;
};

const GhostButton = ({
  text,
  secondaryColor = false,
  className,
  href,
}: GhostButtonProps) => {
  const colorClasses = secondaryColor
    ? "hover:bg-tan/25 text-tan border-tan"
    : "hover:bg-indigo-950/25 text-indigo-950 border-indigo-950";

  return href ? (
    <Link
      href={href}
      className={`w-fit cursor-pointer bg-transparent transition-all duration-150 px-6 py-3  font-semibold rounded-md border ${colorClasses} ${className}`}
    >
      {text}
    </Link>
  ) : (
    <button
      className={`w-fit cursor-pointer bg-transparent transition-all duration-150 px-6 py-3  font-semibold rounded-md border ${colorClasses} ${className}`}
    >
      {text}
    </button>
  );
};

export default GhostButton;
