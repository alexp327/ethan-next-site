import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

type CTAButtonProps = {
  text: string;
  secondaryColor?: boolean;
  className?: string;
  href?: Url;
};

const CTAButton = ({
  text,
  secondaryColor = false,
  className,
  href,
}: CTAButtonProps) => {
  const colorClasses = secondaryColor
    ? "bg-primary-accent hover:bg-primary-accent/80 text-primary-bg"
    : "bg-primary-bg hover:bg-primary-bg/80 text-primary-text";

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

export default CTAButton;
