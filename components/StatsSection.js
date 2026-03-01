"use client";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="w-full bg-gray-100 py-14">
      <div className="max-w-screen-2xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

        {/* 5000+ */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-red-600">
            <Counter target={5000} suffix="+" />
          </h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Businesses Incorporated
          </p>
        </div>

        {/* 4.8 ⭐ */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 flex justify-center items-center gap-2">
            4.8 <FaStar className="text-red-600 text-3xl" />
          </h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Highly rated on Google
          </p>
        </div>

        {/* 15+ */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-red-600">
            <Counter target={15} suffix="+" />
          </h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Advisors Ready to Help
          </p>
        </div>

        {/* 9M+ */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-red-600">
            9M+
          </h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Dirhams of Revenue Generated
          </p>
        </div>

      </div>
    </section>
  );
}