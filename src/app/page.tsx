import Image from "next/image";
import Diamond from "./components/diamond";
import Box from "./components/box";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-12 relative">
        <div className="flex items-center gap-3 mb-6 z-10">
          <Image src="/dia-logo.svg" alt="logo" width={60} height={60} />
          <h1 className="text-4xl font-bold">Reviewing Your Team</h1>
        </div>
        <p className="text-center max-w-3xl mx-auto mb-[150px]">
          Map potential and performance to create a picture of capability across your team, ​where
          people need support, and ​who would benefit from a development.​ ​Benchmark your views
          with peers. ​
        </p>

        {/* Fixed position container for all elements */}
        <div className="relative w-[1200px] h-[800px] mx-auto left-[-36px]">
          {/* Diamond positioned at center */}
          <div className="absolute left-1/2 transform -translate-x-1/2  z-10">
            <Diamond />
          </div>

          {/* Wave image at fixed position */}
          <Image
            src="/dia-wave.svg"
            alt="diamond"
            width={850}
            height={900}
            className="absolute bottom-[300px] left-1/2 transform -translate-x-1/2 pointer-events-none z-20"
          />

          {/* Box positioned to overlap diamond */}
          <div className="absolute top-[620px] left-1/2 transform -translate-x-1/2 z-5 w-[1060px]">
            <Box />
          </div>

          {/* Antennae images at fixed positions */}
          <Image
            src="/antennae1.svg"
            alt="antennae1"
            width={60}
            height={60}
            className="absolute top-[470px] left-[320px] pointer-events-none"
          />
          <Image
            src="/antennae2.svg"
            alt="antennae2"
            width={60}
            height={60}
            className="absolute top-[470px] right-[320px] pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}
