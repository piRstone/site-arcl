"use client";

import Image from "next/image";
import Link from "next/link";
import Nav from "../Nav";

const Header = () => {
  return (
    <header className="fixed left-0 w-full z-30 top-0 bg-white/50 backdrop-filter backdrop-blur-md">
      <section className="relative flex items-center justify-between py-3 lg:justify-start max-w-6xl mx-auto px-8">
        <div className="mr-2 lg:mr-8 flex items-center">
          <h1 className="logo mb-0">
            <Link href="/">
              <Image
                src="/logo-horizontal.svg"
                alt="logo"
                className="h-12 w-auto"
                height={56}
                width={171}
              />
            </Link>
          </h1>
        </div>
        <section className="flex items-center ml-auto">
          <Nav />
          <div className="btn-group hidden md:block">
            <div className="flex flex-wrap gap-4">
              <Link
                role="button"
                href="https://www.payasso.fr/arcl/adhesion"
                target="_blank"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg px-8 py-2 font-semibold transition-colors duration-300 hover:bg-green-700 hover:text-white md:w-auto bg-[#349c37] hover:bg-green/80 text-white ml-4"
              >
                Adhérer
              </Link>
            </div>
          </div>
        </section>
      </section>
    </header>
  );
};

export default Header;
