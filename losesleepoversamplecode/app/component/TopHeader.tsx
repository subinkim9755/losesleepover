import React from "react";

function TopHeader() {
  const text = "26HS SEASON OPEN";
  const repeatedText = Array.from({ length: 12 }, (_, index) => (
    <span key={index} className="inline-block px-30 text-[9px] font-bold tracking-[0.7em] text-white">
      {text}
    </span>
  ));

  return (
    <div className="overflow-hidden bg-black">
      <div className="marquee-track flex w-max items-center whitespace-nowrap py-2 text-[12px] font-semibold tracking-[0.5em] text-white">
        {repeatedText}
      </div>
    </div>
  );
}

export default TopHeader;
