import React from "react";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

/**
 * A simple card component matching the provided design.
 *
 * Props:
 * - iconSrc: path to the icon image (string)
 * - title: card title (string)
 * - description: card body text (string)
 * - href: optional link url for the arrow (string)
 */
export default function Card({
  iconSrc = "/images/icon/icon_default.svg",
  title = "Business Setup",
  description = "Comprehensive business setup solutions tailored to suit both Freezone and Mainland requirements.",
  href = "/ContactUs",
}) {
  return (
    <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 md:p-5 2xl:p-8 transition-colors duration-300 hover:bg-[var(--button-color)]">
      <div className="text-[var(--bg-red)] mb-6">
        <Image
          src={iconSrc}
          alt={title}
          width={50}
          height={50}
          className="w-12 h-12 md:w-10 md:h-10 2xl:w-14 2xl:h-14"
        />
      </div>
      <h3 className="text-2xl  2xl:text-3xl font-semibold mb-4 text-[var(--bg-red)]">
        {title}
      </h3>
      <p className=" mb-8 text-xl 2xl:text-lg leading-relaxed font-light">{description}</p>
      {href && (
        <a href={href} className="inline-flex items-center text-gray-600 hover:text-black">
          <BsArrowRight className="text-xl 2xl:text-3xl" />
        </a>
      )}
    </div>
  );
}
    