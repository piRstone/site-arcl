"use client";

import { ArrowUpRight, List } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Nav = () => {
  const pathname = usePathname();

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const navItems = [
    {
      name: "Nos actions",
      key: "#nos-actions",
      href: "/#nos-actions",
    },
    {
      name: "Pourquoi adhérer ?",
      key: "#pourquoi-adherer",
      href: "/#pourquoi-adherer",
    },
    {
      name: "Restez informé",
      key: "#newsletter",
      href: "/#newsletter",
    },
    {
      name: "Contact",
      key: "#contact",
      href: "mailto:contact@arcl-clisson.fr",
      isArrow: true,
    },
  ];

  return (
    <nav className="header-nav text-black/60">
      <div className="header-nav--container">
        <button
          type="button"
          className="lg:ml-3 inline-flex items-center p-2 text-white lg:hidden md:mr-auto"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
          onClick={toggleNav}
        >
          <span className="sr-only">Ouvrir le menu</span>
          <List className="h-6 w-auto text-black" />
        </button>
        <div
          className={`absolute left-0 w-full lg:relative lg:block lg:w-auto z-20 ${isNavOpen ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="header-nav--menu my-3 flex flex-col gap-6 border border-gray-100 bg-gray-50 p-4 font-medium lg:my-0 lg:mt-0 lg:flex-row lg:border-0 lg:bg-transparent lg:p-0 lg:font-medium">
            {navItems.map((item) => (
              <li key={item.key} className="header-nav--menu-item">
                <Link
                  href={item.href}
                  className={`menu-item--link flex items-center text-black font-medium ${
                    pathname === item.href ? "active" : ""
                  }`}
                  onClick={closeNav}
                >
                  {item.name}
                  {item.isArrow && (
                    <span className="ml-2 inline-block text-sm font-medium text-inherit">
                      <ArrowUpRight className="h-6 w-auto" />
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
