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
    ? "hover:bg-primary-accent/25 text-primary-accent border-primary-accent"
    : "hover:bg-primary-bg/25 text-primary-bg border-primary-bg";

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
