import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.png";
import menu_white from "../../public/menu_white.png";

function MainHeader() {
  return (
    <header className="sticky top-[32px] z-30">
      <div className="flex h-[58px] w-full items-center justify-between border-b border-white/20 bg-black/15 px-4 backdrop-blur-sm">
        <button type="button" className="flex h-20 w-30 cursor-pointer items-center justify-center">
          <Image src={menu_white} alt="Logo" width={30} height={30} />
        </button>

        <button type="button" className="flex h-20 w-60 cursor-pointer items-center justify-center">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={150} height={60} />
          </Link>
        </button>

        <div className="flex h-20 w-60 items-center justify-end gap-5 text-white">
          <button className="cursor-pointer text-lg hover:text-white/70">LOGIN</button>
          <button className="cursor-pointer text-lg hover:text-white/70">JOIN</button>
          <button className="cursor-pointer text-lg hover:text-white/70">CARFT(0)</button>
          <button className="cursor-pointer text-lg hover:text-white/70">SEARCH</button>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
