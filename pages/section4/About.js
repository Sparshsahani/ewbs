import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";
import Mainland from "./Mainland";
import AboutSection from "@/components/AboutSection";

export default function About() {
  return (
    <>
      <AboutSection
        variant="image"
        tag="About Us"
        title={`5,000+ Clients across over 50 nations use our services.`}
        description="EWBS Star Businessmen Services LLC is your premier partner for seamless business expansion in the Emirates."
        buttonText="More About Us"
        imageSrc="/images/media/on-call.png"
        checklist={[
          "Streamlined business setup solutions",
          "Comprehensive financial services",
          "Tailored IT services",
        ]}
      />
      <Mainland />
    </>
  );
}
