import Link from  "next/link";
import Image from "next/image";

  import MainSection from "./component/MainSection";
import LandingMainIMG from "../public/LandingMainIMG.png";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#f5f5f5]">
      <div className="relative h-[calc(100vh-40px)] min-h-[560px] w-full overflow-hidden">
        <Image
          src={LandingMainIMG}
          alt="Main Model"
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/5" />
  
      </div>

        <div className="flex h-[320px] w-full items-center justify-center gap-4 bg-gray-100 py-8">
        <MainSection>
          <h1 className="text-4xl font-bold">1</h1>
          <Link href="/Top">
            <button className="mt-2 rounded border border-black bg-white px-3 py-1">
              Top
            </button>
          </Link>
        </MainSection>

        <MainSection>
          <h1 className="text-4xl font-bold">2</h1>
          <Link href="/Essentials">
            <button className="mt-2 rounded border border-black bg-white px-3 py-1">
              Essentials
            </button>
          </Link>
        </MainSection>
      </div>

      
    </main>
  );
}
