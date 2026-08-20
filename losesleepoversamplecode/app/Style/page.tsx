
"use client";

import { useState } from "react";
import LastSection from "../component/LastSection";
import Image from "next/image";
import DepthCarousel from "../component/DepthCarousel";
import DriftWall from "../component/DriftWall";

const items = [
  { image: 'https://picsum.photos/seed/a/800/1000', alt: 'One' },
  { image: 'https://picsum.photos/seed/b/800/1000', alt: 'Two' },
  { image: 'https://picsum.photos/seed/c/800/1000', alt: 'Three' },
  { image: 'https://picsum.photos/seed/d/800/1000', alt: 'Four' },
  { image: 'https://picsum.photos/seed/e/800/1000', alt: 'Five' }
];



export default function Style2() {
  const [isSlider, setIsSlider] = useState(false);

 return (
  <div className="mt-30">
    {/* 상단 */}
    <div className="px-8">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-2xl font-bold mb-8 text-black">
            New Arrival
        </h1>

        <div className="flex flex-row items-center justify-center gap-4 w-40">
          <Image
            src="/dropDown.png"
            alt="정렬"
            width={20}
            height={20}
          />

          <p>정렬방식</p>

          <button
            onClick={() => setIsSlider((prev) => !prev)}
            className="cursor-pointer"
          >
            <Image
              src="/grid.png"
              alt="상품 보기 방식 변경"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>


    {/* 상품 */}
    <div className="px-8">
      {isSlider ? (
        <div className="relative h-[500px] w-full">
          <DepthCarousel
            items={items}
            depth={180}
            spread={105}
            tilt={30}
            tiltDirection="right"
            perspective={1500}
            visibleCards={5}
            falloff={0.15}
            blur={5}
            autoplay={false}
            loop
            cardWidth={270}
            cardHeight={420}
            radius={10}
            tint="#0f1f9e"
            duration={800}
            ease="power3.out"
            autoplayDelay={3200}
            showControls
            showIndicators
          />
        </div>
   ) : (
        <div className="relative h-[600px] w-full">
          <DriftWall
            items={items}
            columns={6}
            tileWidth={160}
            tileHeight={220}
            gap={20}
            tilt={16}
            turn={-23}
            perspective={1800}
            depth={170}
            speed={20}
            direction="up"
            variance={0.7}
            parallax={0.7}
            lift={68}
            fade={0}
            dim={1}
            overlayColor="#060010"
            radius={10}
            roll={0}
            pauseOnHover
            grayscale={false}
          />
        </div>
)}
    </div>


    <div className="h-20"></div>

    <LastSection />
  </div>
);
}