import Link from "next/link";
import MainSection from "./component/MainSection";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-row items-center justify-center gap-4 bg-gray-100">
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
  );
}
