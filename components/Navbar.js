"use client";
import { useState, useEffect } from "react";
import LogoComp from "./LogoComp";
import Button from "./Button";

export default function Navbar({
  bgcolor = "bg-white",
  // items can now be either strings or objects with sublinks
  items = [
    { label: "Home", href: "/#home", links: [] },
    {
      label: "Mainland",
      href: "#mainland",
      links: [
        { label: "Dubai Mainland", href: "/business-setup-in-dubai-mainland" },
        { label: "Required Documents", href: "/RequiredDocuments" },
      ],
    },
    {
      label: "Freezone",
      href: "#freezone",
      links: [
        { label: "Dubai Freezone", href: "/dubai-free-zone-business-setup" },
        { label: "Shams Freezone", href: "/ShamsFreeozone" },
        { label: "AMC Freezone", href: "/AMCFreeozone" },
        { label: "Rakez Freezone", href: "/RakezFreezone" },
        { label: "Ifza Freezone", href: "/IFZAFreeozone" },
        { label: "SPC Freezone", href: "/SPCFreeozone" },
      ]
    },
    { label: "Services", href: "/business-setup-services-in-dubai", },
    { label: "Blog", href: "/Blog" },
    { label: "About Us", href: "/AboutUs" },
    { label: "Careers", href: "/Career" },
    { label: "Contact", href: "/ContactUs" },
  ],
}) {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});

  const toggleSubmenu = (label) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const renderLink = (item) => {
    if (typeof item === "string") {
      const href = `#${item.toLowerCase().replace(/\s+/g, "-")}`;
      return <a key={item} href={href}>{item}</a>;
    }

    // object case for desktop
    return (
      <div key={item.label} className="relative group py-2">
        <a href={item.href} className="flex items-center focus:outline-none hover:text-[var(--bg-red)] transition-colors">
          {item.label}
          {item.links?.length > 0 && (
            <svg className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </a>

        {item.links?.length > 0 && (
          <div className="absolute left-0 top-[100%] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 bg-white shadow-lg rounded-md py-2 min-w-[180px] z-50">
            <ul className="flex flex-col">
              {item.links.map((sub) => (
                <li key={sub.label}>
                  <a
                    href={sub.href}
                    className="block px-4 py-2 text-gray-600 hover:text-red-600 transition-colors whitespace-nowrap"
                  >
                    {sub.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className=" flex items-center justify-between px-3 py-2  xl:px-20 lg:py-3 2xl:py-6  ">
        <LogoComp />

        {/* desktop links */}
        <nav className="hidden lg:flex space-x-10 2xl:space-x-16 font-medium lg:text-sm xl:text-sm 2xl:text-xl">
          {items.map(renderLink)}
        </nav>

        {/* mobile toggle */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                open
                  ? "M6 18L18 6M6 6l12 12" // X icon
                  : "M4 6h16M4 12h16M4 18h16" // hamburger
              }
            />
          </svg>
        </button>

        <Button
          href="/ContactUs"
          bgcolor={`bg-[var(--button-color)]  hover:bg-[var(--bg-red)] hover:text-white transition-colors`}
          className="hidden lg:block font-medium  xl:text-sm 2xl:text-xl"
        />
      </div>

      {/* mobile menu */}
      <nav
        className={`lg:hidden bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <ul className="flex flex-col divide-y divide-gray-200 bg-white">
          {items.map((item) => {
            if (typeof item === "string") {
              const href = `#${item.toLowerCase().replace(/\s+/g, "-")}`;
              return (
                <li key={item}>
                  <a
                    href={href}
                    className="block w-full text-left py-3 px-5 hover:bg-gray-100 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              );
            }

            // object with possible sublinks for mobile
            const hasSublinks = item.links && item.links.length > 0;
            const isOpen = submenuOpen[item.label];
            return (
              <li key={item.label}>
                <div className="flex justify-between items-center">
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (hasSublinks) {
                        e.preventDefault();
                        toggleSubmenu(item.label);
                      }
                    }}
                    className="block w/full text-left py-3 px-5 hover:bg-gray-100 transition-colors"
                  >
                    {item.label}
                  </a>
                  {hasSublinks && (
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="ml-2 focus:outline-none"
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <svg
                        className={`w-4 h-4 transform transition-transform ${isOpen ? "rotate-90" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                {hasSublinks && isOpen && (
                  <ul className="mt-1 ml-6 space-y-1 bg-gray-50 rounded-md overflow-hidden">
                    {item.links.map((sub) => (
                      <li key={sub.label}>
                        <a
                          href={sub.href}
                          className="block w-full text-left py-2 px-4 hover:bg-gray-100 text-sm transition-colors"
                        >
                          {sub.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <div className="p-4">
          <Button bgcolor={`bg-[var(--button-color)]`} className="w-full" />
        </div>
      </nav>
    </header>
  );
}
