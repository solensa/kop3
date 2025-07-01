import Image from "next/image";
import Diamond from "./components/diamond";
import Box from "./components/box";

export default function Home() {
  return (
    <div className="bg-black">
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
        <Diamond />
        <Image
          src="/dia-wave.svg"
          alt="diamond"
          width={850}
          height={900}
          className="absolute bottom-95 pointer-events-none"
        />
      </div>
      <div className="  text-white flex flex-col items-center px-4 py-12 relative  mt-[-315px]">
        <Image
          src="/antennae1.svg"
          alt="diamond"
          width={60}
          height={60}
          className="absolute -top-25 left-120 pointer-events-none"
        />
        <Image
          src="/antennae2.svg"
          alt="diamond"
          width={60}
          height={60}
          className="absolute -top-25 right-120 pointer-events-none"
        />
        <Box />
      </div>
    </div>
  );
}
