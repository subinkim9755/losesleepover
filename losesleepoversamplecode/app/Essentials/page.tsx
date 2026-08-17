"use client";

import { useRef, useState } from "react";
import LastSection from "../component/LastSection";
import Product from "../component/Product";
import Image from "next/image";

export default function Essentials() {
  const [isSlider, setIsSlider] = useState(false);
  const [progress, setProgress] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  const products = Array.from({ length: 50 }, (_, i) => ({
    title: `${i + 1}번상품`,
    price: 50000 + i * 15000,
  }));

  // 슬라이더 스크롤에 따라 진행률 변경
  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const maxScroll = slider.scrollWidth - slider.clientWidth;

    if (maxScroll <= 0) {
      setProgress(0);
      return;
    }

    const currentProgress = (slider.scrollLeft / maxScroll) * 100;

    setProgress(currentProgress);
  };

  // 마우스 드래그
  const handleMouseDown = (e: React.MouseEvent) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const startX = e.pageX - slider.offsetLeft;
    const scrollLeft = slider.scrollLeft;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;

      slider.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
const [currentPage, setCurrentPage] = useState(1);

const itemsPerPage = 8;

const totalPages = Math.ceil(products.length / itemsPerPage);

const startIndex = (currentPage - 1) * itemsPerPage;
const currentProducts = products.slice(
  startIndex,
  startIndex + itemsPerPage
);
  return (
    <div className="p-8 mt-30">
      {/* 상단 */}
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-2xl font-bold mb-8 text-black">
          Essentials
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

      {/* 상품 */}
      {isSlider ? (
        <div>
          {/* 가로 슬라이더 */}
          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onScroll={handleScroll}
            className="flex gap-3 overflow-x-hidden cursor-grab active:cursor-grabbing select-none"
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="shrink-0 w-[300px]"
              >
                <Product
                  title={product.title}
                  price={product.price}
                />
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-10 flex justify-center">
            <div className="relative w-[60%] h-[3px] bg-gray-300">
              <div
                className="absolute left-0 top-0 h-[3px] bg-black"
                style={{
                  width: "25%",
                  transform: `translateX(${progress * 3}%)`,
                }}
              />
            </div>
          </div>
        </div>
    ) : (
  <>
    {/* Grid */}
    <section className="grid grid-cols-4 gap-6">
      {currentProducts.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          price={product.price}
        />
      ))}
    </section>

    {/* Pagination */}
    <div className="flex items-center justify-center gap-4 mt-12">
      {/* 이전 */}
      <button
        onClick={() =>
          setCurrentPage((prev) => Math.max(prev - 1, 1))
        }
        disabled={currentPage === 1}
        className={`text-sm ${
          currentPage === 1
            ? "text-gray-300 cursor-default"
            : "text-black cursor-pointer"
        }`}
      >
        ←
      </button>

      {/* 페이지 번호 */}
      <div className="flex items-center gap-3">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;

          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 text-sm ${
                currentPage === page
                  ? "font-bold underline"
                  : "text-gray-500"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* 다음 */}
      <button
        onClick={() =>
          setCurrentPage((prev) =>
            Math.min(prev + 1, totalPages)
          )
        }
        disabled={currentPage === totalPages}
        className={`text-sm ${
          currentPage === totalPages
            ? "text-gray-300 cursor-default"
            : "text-black cursor-pointer"
        }`}
      >
        →
      </button>
    </div>
  </>
)}

      <div className="h-20"></div>

      <LastSection />
    </div>
  );
}