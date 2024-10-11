import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

export default function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:64">

      <div className=" h-full md:hidden  flex items-center justify-between relative">
        {/* MOBILE */}
        <Link
          className=" text-2xl tracking-wide font-extrabold md:hidden"
          href="/"
        >
          Thread_shop
        </Link>
        <Menu />
      </div>
      {/* BIGGER SCRRENS */}

      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12  ">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={24} height={24} />
            <Link className=" text-2xl tracking-wide font-extrabold " href="/">
              Thread_shop
            </Link>
          </Link>
          <div className="hidden xl:flex gap-4">
          <Link href="/">
            Homepage
          </Link>
          <Link href="/shop">
            Shop
          </Link>
          <Link href="/deals">
            Deals
          </Link>
          <Link href="/contact">
            Contact
          </Link>
          <Link href="/logout">
            Logout
          </Link>
          <Link href="/cart">
            Cart(1)
          </Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-2/3 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
        <Menu />
      </div>
   
    </div>
  );
}
