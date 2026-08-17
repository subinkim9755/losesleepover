import Link from  "next/link";
import Image from "next/image";
import MainSection from "./component/MainSection";
import Top from "../public/Top.jpeg"
import Essentials from "../public/ESEENTIALS.jpeg";
import LandingMainIMG from "../public/LandingMainIMG.png";
import LastSection from "./component/LastSection";

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-auto bg-[#f5f5f5] [scroll-behavior:smooth] [scroll-snap-type:y_mandatory] [scrollbar-width:none]">
      <section className="relative h-screen snap-start overflow-hidden [scroll-snap-align:start]">
        <div className="relative h-full min-h-[560px] w-full overflow-hidden pt-[88px]">
          <Image
            src={LandingMainIMG}
            alt="Main Model"
            fill
            priority
            className="object-cover object-top"
            style={{ objectPosition: "center top" }}
          />

          <div className="absolute bottom-8 left-8 z-10 max-w-[560px]">
            <p className="mb-3 inline-block bg-white px-3 py-1 text-[12px] font-black tracking-[0.12em] text-black">
              [26HS SEASON OPEN]
            </p>
            <p className="text-[clamp(2.6rem,4vw,5rem)] leading-[0.9] tracking-[-0.04em] text-[#f3efe8]">
              SUPER "FLOWER" MARKET
            </p>
            <button className="mt-5 inline-flex cursor-pointer items-center justify-center bg-transparent px-4 pb-1 text-sm text-[#f3efe8] underline decoration-white/80 underline-offset-4 transition outline-none hover:text-white focus:outline-none">
              Shop Now
            </button>
          </div>

          <div className="absolute inset-0 bg-black/5" />
        </div>
      </section>

      <section className="flex h-screen snap-start flex-row items-stretch justify-center bg-gray-100 [scroll-snap-align:start]">
        <MainSection>
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={Top}
              alt="Main Model"
              fill
              priority
              className="object-cover object-center"
              style={{ objectPosition: "center" }}
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-1">
              <p className="text-lg font-bold text-white">Top</p>
              <Link href="/Top">                
                <button className="inline-flex cursor-pointer items-center justify-center bg-transparent px-4 pb-1 text-sm text-[#f3efe8] underline decoration-white/80 underline-offset-4 transition outline-none hover:text-white focus:outline-none">
                  More View
                </button>

              </Link>
              </div>
            </div>
          </div>
        </MainSection>

        <MainSection>
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src={Essentials}
              alt="Main Model"
              fill
              priority
              className="object-cover object-center"
              style={{ objectPosition: "center" }}
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-1">
              <p className="text-lg font-bold text-white">Essentials</p>
              <Link href="/Essentials">                
                <button className="inline-flex cursor-pointer items-center justify-center bg-transparent px-4 pb-1 text-sm text-[#f3efe8] underline decoration-white/80 underline-offset-4 transition outline-none hover:text-white focus:outline-none">
                  More View
                </button>

              </Link>
              </div>
            </div>
          </div>
        </MainSection>
      </section>


      <LastSection />
    </main>
  );
}
