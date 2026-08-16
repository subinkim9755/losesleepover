import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.png";
import menu_white from "../../public/menu_white.png";


function TopHeader() {
  const text = "26HS SEASON OPEN";
  const repeatedText = Array.from({ length: 12 }, (_, index) => (
    <span key={index} className="inline-block px-30 text-[9px] font-bold tracking-[0.7em] text-white">
      {text}
    </span>
  ));

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-40 h-[30px] overflow-hidden bg-black">
        <div className="marquee-track flex h-full w-max items-center whitespace-nowrap py-0 text-[12px] font-semibold tracking-[0.5em] text-white">
          {repeatedText}
        </div>
      </div>

      <header className="fixed inset-x-0 top-[30px] z-30">
        {/* 투명도 bg-black/15 */}
        <div className="flex h-[58px] w-full items-center justify-between border-b border-white/20 bg-black/15 px-8 backdrop-blur-sm" >
          <div className="flex h-20 w-20 items-center justify-start">
          <button type="button" className="flex justify-left h-20 w-20 cursor-pointer items-center justify-start">
            <Image src={menu_white} alt="Logo" width={30} height={30} />
          </button>
          </div>

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
    </>
  );
}





export default TopHeader;
