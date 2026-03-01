import React from "react";
import Link from "next/link";

export default function Button({ bgcolor, className = "", children = "Get In Touch", href, ...rest }) {
  const btn = (
    <button
      className={`${bgcolor}  px-8 py-3 lg:px-5 rounded-full w-full`}
      {...rest}
    >
      {children}
    </button>
  );

  if (href) {
    return (
      <div className={className}>
        <Link href={href}>{btn}</Link>
      </div>
    );
  }

  return (
    <div className={className}>
      {btn}
    </div>
  );
}
