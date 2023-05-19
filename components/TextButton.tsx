import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

type TextButtonProps = {
  text: string;
  secondaryColor?: boolean;
  className?: string;
  href?: Url;
};

const TextButton = ({
  text,
  secondaryColor = false,
  className,
  href,
}: TextButtonProps) => {
  const colorClasses = secondaryColor
    ? "bg-primary-accent/10 hover:bg-primary-accent/25 text-primary-accent"
    : "bg-primary-bg/10 hover:bg-primary-bg/25 text-primary-bg";

  return href ? (
    <Link
      href={href}
      className={`w-fit cursor-pointer transition-all duration-150 px-6 py-3 font-semibold rounded-md ${colorClasses} ${className}`}
    >
      {text}
    </Link>
  ) : (
    <button
      className={`w-fit cursor-pointer transition-all duration-150 px-6 py-3 font-semibold rounded-md ${colorClasses} ${className}`}
    >
      {text}
    </button>
  );
};

export default TextButton;
