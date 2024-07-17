"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="w-full fixed z-50  bg-[#071952]">
      <div className="flex justify-between h-16 max-w-7xl mx-auto items-center">
        {" "}
        <Link href="/">
          <Image src="/logo1.png" width={70} height={100} alt="" />
        </Link>
        <div onClick={() => setMenu(!false)} className="flex lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={30}
            className="text-orange-500"
            fill="currentColor"
          >
            <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
          </svg>
        </div>
        <div className="lg:flex hidden gap-8 font-bold text-white text-xl">
          <Link href="/" className=" hover:text-yellow-300 hover:scale-125">
            Home
          </Link>
          <Link
            href="/aboutus"
            className=" hover:text-yellow-700 hover:scale-125"
          >
            About
          </Link>
          <Link
            href="/Productpage"
            className=" hover:text-blue-300 hover:scale-125"
          >
            Product
          </Link>
          <Link
            href="/Teams"
            className=" hover:text-orange-600 hover:scale-125"
          >
            Teams
          </Link>
        </div>
        <div className="lg:flex hidden content-center">
          <Link href="/contact">
        <button className="text-red hover:before:bg-red border 
                       border-red-500 relative h-10 w-30 
                       overflow-hidden bg-white px-3 text-red-500
                       shadow-2xl transition-all before:absolute 
                       before:bottom-0 before:left-0 before:top-0
                       before:z-0 before:h-full before:w-0 
                       before:bg-red-500 before:transition-all 
                       before:duration-500 hover:text-white 
                       hover:shadow-red-500 hover:before:left-0 
                       hover:before:w-full">
            <span className="relative z-10">Contact Us</span>
        </button>
        </Link>
        </div>
      </div>

      <div
        className={clsx(
          "lg:hidden fixed h-full w-screen top-0 bottom-0 bg-black/50 z-50 -translate-x-full",
          menu && "translate-x-0 transition-all duration-500"
        )}
      >
        <div className="flex flex-col w-40 h-screen absolute right-0 p-8 gap-3 bg-white">
          <button onClick={() => setMenu(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path>
            </svg>
          </button>
          <Link
            onClick={() => setMenu(false)}
            href="/"
            className="font-medium text-sky-700"
          >
            Home
          </Link>
          <Link
            onClick={() => setMenu(false)}
            href="/aboutus"
            className="font-medium text-sky-700"
          >
            About
          </Link>
          <Link
            onClick={() => setMenu(false)}
            href="/Productpage"
            className="font-medium text-sky-700"
          >
            Product
          </Link>
          <Link
            onClick={() => setMenu(false)}
            href="/Teams"
            className="font-medium text-sky-700"
          >
            Teams
          </Link>
        </div>
      </div>
    </div>
  );
}
