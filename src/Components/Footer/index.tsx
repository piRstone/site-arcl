"use client";

import { ArrowUpRight } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className="bg-white">
      {/* Footer Links */}
      <section className="relative max-w-6xl mx-auto z-10 px-8">
        <div className="pt-16 pb-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-8 lg:grid-cols-12">
            <div className="col-span-6">
              <div className="grid gap-2">
                <Link href="/">
                  <Image
                    src="/logo-horizontal.svg"
                    alt="logo"
                    className="h-20 w-auto"
                    height={100}
                    width={305}
                  />
                </Link>
                <p className="m-0">
                  Association loi 1901 déclarée en Préfecture.
                </p>
              </div>
            </div>
            <div className="col-span-6">
              <Link
                role="button"
                href="https://www.payasso.fr/arcl/adhesion"
                target="_blank"
                className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg px-8 py-2 font-semibold transition-colors duration-300 hover:bg-green-700 hover:text-white md:w-auto bg-[#349c37] hover:bg-green/80 text-white mr-2 mb-2"
              >
                Adhérer
              </Link>
              <Link
                role="button"
                href="mailto:contact@arcl-clisson.fr"
                className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg px-8 py-2 font-semibold transition-colors duration-300 hover:bg-gray-300 md:w-auto bg-gray-200 text-black"
              >
                Nous contacter
                <ArrowUpRight className="h-6 w-auto" />
              </Link>
            </div>
          </div>
        </div>
        {/* Footer Credits */}
        <section className="footer-credits relative z-10">
          <div className="wrap wrap-px py-6">
            <p className="my-0 text-gray-400">
              © {new Date().getFullYear()} Association des Riverains du Champ
              Louet. Tous droits réservés.
            </p>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
