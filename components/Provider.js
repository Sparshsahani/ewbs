"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function Provider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
      easing: "ease-in-out",
    });
  }, []);

  return <>{children}</>;
}