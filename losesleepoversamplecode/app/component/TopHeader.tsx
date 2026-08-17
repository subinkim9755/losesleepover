import React from "react";
import Image from "next/image";
import Link from "next/link";
import LogoWhite from "../../public/Logo_white.png";
import menu_white from "../../public/menu_white.png";


function TopHeader() {
  const text = "26HS SEASON OPEN";
  const repeatedText = Array.from({ length: 12 }, (_, index) => (
    <span key={index} className="inline-block px-30 text-[9px] font-bold tracking-[0.3em] text-white">
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
        {/* 투명도 bg-black/15 backdrop-blur-sm*/}


        <div className="grid h-[58px] w-full grid-cols-[1fr_auto_1fr] items-center px-5">
          <div className="justify-self-start">
            <div className="hidden min-[769px]:flex items-center justify-end gap-5 justify-self-end text-white">
              <button className="cursor-pointer text-sm hover:text-white/70">SHOP</button>
              <button className="cursor-pointer text-sm hover:text-white/70">BARND</button>
              <button className="cursor-pointer text-sm hover:text-white/70">COLLECTION</button>
            </div>

            <button type="button" className="flex h-14 w-14 cursor-pointer items-center justify-start min-[769px]:hidden">
              <Image src={menu_white} alt="Logo" width={20} height={20} />
            </button>
          </div>

          <button type="button" className="flex cursor-pointer items-center justify-center">
            <Link href="/">
              <Image src={LogoWhite} alt="Logo" width={130} height={50} />
            </Link>
          </button>

          <div className="flex items-center justify-end gap-5 justify-self-end text-white">
            <button className="cursor-pointer text-sm hover:text-white/70">LOGIN</button>
            <button className="cursor-pointer text-sm hover:text-white/70">JOIN</button>
            <button className="cursor-pointer text-sm hover:text-white/70">CARFT(0)</button>
            <button className="cursor-pointer text-sm hover:text-white/70">SEARCH</button>
          </div>
        </div>
      </header>
    </>
  );
}





export default TopHeader;
