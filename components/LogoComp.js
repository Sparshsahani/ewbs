import React from "react";
import Image from "next/image";
import logo from "../public/images/logo/ewbsnewlogo.png";

export default function LogoComp() {
  return (
    <>
      <div>
        <Image src={logo} alt="Logo" width={150} height={100} className="w-30 xl:w-30 2xl:w-35"/>
      </div>
    </>
  );
}
