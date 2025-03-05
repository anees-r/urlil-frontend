import React from "react";
import Image from "next/image";
import Logo from "@/public/app-icon.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center items-center min-h-14 shadow-2xl">
        <Link href="/" className="flex">
          <Image alt="logo" src={Logo} width={40} height={40}></Image>
          <p className="text-3xl font-bold" style={{ color: "#C6FF00" }}>
            urlil.
          </p>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
