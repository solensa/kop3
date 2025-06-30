import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-12 relative overflow-hidden">
      <div className="flex items-center gap-3 mb-12 z-10">
        <h1 className="text-4xl font-bold">What Everyone Should Have</h1>
      </div>

      {/* Goals Section */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 z-10">
        {/* Performance Goals */}
        <div className="bg-white rounded-lg overflow-hidden text-black relative hover:transform hover:-translate-y-1 hover:transition-all hover:duration-200 hover:shadow-lg">
          <div className="h-2.5 w-full bg-gradient-to-r from-[#009CDE] to-[#00A7B5]"></div>
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/blue-tick.svg"
                alt="Check"
                width={56}
                height={56}
                className="text-white"
              />
              <h2 className="text-2xl font-bold">Performance Goals</h2>
            </div>

            <p className="mb-12">Aligned with FY26 Strategic Priorities, aim for 4-6.</p>

            <div className="bg-[#D7F3FF] rounded-lg p-4 mb-4 border border-[#91DEFF]">
              <p className="text-[#12536E]">
                <span className="font-bold">Pro-tip: </span>
                Make your goals SIMple - Specific, Important, Measurable. Ask the SuccessFactors AI
                Coach to help!
              </p>
            </div>
          </div>
        </div>

        {/* Learning Goals */}
        <div className="bg-white rounded-lg overflow-hidden text-black relative hover:transform hover:-translate-y-1 hover:transition-all hover:duration-200 hover:shadow-lg">
          <div className="h-2.5 w-full bg-gradient-to-r from-[#50A684] to-[#64A70B]"></div>
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/green-tick.svg"
                alt="Check"
                width={56}
                height={56}
                className="text-white"
              />
              <h2 className="text-2xl font-bold">Learning Goals</h2>
            </div>

            <p className="mb-6">
              Focused on developing knowledge, skills and behaviours. Aim for 1-2 goals.
            </p>

            <div className="bg-[#DAFCEF] rounded-lg p-4 mb-4 border border-[#A6E4CB]">
              <p className="text-[#126443]">
                <span className="font-bold">Pro-tip: </span>
                Chat with the{" "}
                <Link
                  href="https://www.linkedin.com/learning/ai-coaching"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#F0B941] hover:underline"
                >
                  LinkedIn Learning Coach
                </Link>{" "}
                to explore what you could learn. You can also attach learning to you Learning Goal!
              </p>
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/gradient.png"
        alt=""
        width={800}
        height={271}
        className="absolute top-[570px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
      />

      {/* Strategic Priorities Section */}
      <div className="w-full max-w-6xl mb-12 z-10">
        {/* Decorative lines */}
        <div className="relative">
          <h2 className="text-4xl font-bold text-center mb-4 relative z-10">
            Our Strategic Priorities
          </h2>

          <div className="absolute w-full max-w-6xl h-[193px] -top-20 left-1/2 -translate-x-1/2 pointer-events-none">
            <Image
              src="/lines2.svg"
              alt=""
              width={830}
              height={167}
              className="w-full h-full opacity-40"
              priority
            />
          </div>
        </div>
        <p className="text-center max-w-3xl mx-auto mb-8">
          When setting your goals, you&apos;ll be able to select a category under these priorities
          to ensure alignment.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Develop Our People */}
          <div className="bg-white rounded-lg overflow-hidden text-black hover:transform hover:-translate-y-1 hover:transition-all hover:duration-200 hover:shadow-lg">
            <div className="bg-gradient-to-r from-[#019cde] to-[#189fac] p-3 flex justify-center">
              <Image src="/people.svg" alt="Check" width={56} height={56} className="text-white" />
            </div>
            <div className="px-6 py-5">
              <h3 className="text-2xl font-bold mb-1">People Ambition</h3>
              <p>Ensure our people thrive.</p>
            </div>
          </div>

          {/* Improve Delivery Consistency */}
          <div className="bg-white rounded-lg overflow-hidden text-black hover:transform hover:-translate-y-1 hover:transition-all hover:duration-200 hover:shadow-lg">
            <div className="bg-gradient-to-r from-[#1a9fa8] to-[#2B8E6A] p-3 flex justify-center">
              <Image
                src="/consistent.svg"
                alt="Check"
                width={56}
                height={56}
                className="text-white"
              />
            </div>
            <div className="px-6 py-5">
              <h3 className="text-2xl font-bold mb-1">Improve Delivery Consistency</h3>
              <p>Via metrics, execution plans, tech & training.</p>
            </div>
          </div>

          {/* Invest in Growth */}
          <div className="bg-white rounded-lg overflow-hidden text-black hover:transform hover:-translate-y-1 hover:transition-all hover:duration-200 hover:shadow-lg">
            <div className="bg-gradient-to-r from-[#33A273] to-[#4AA441] p-3 flex justify-center">
              <Image src="/growth.svg" alt="Check" width={56} height={56} className="text-white" />
            </div>
            <div className="px-6 py-5">
              <h3 className="text-2xl font-bold mb-1">Invest in Growth</h3>
              <p>Focusing on Nuclear, STBGs, Strategic Solutions.</p>
            </div>
          </div>

          {/* Drive Sustainability */}
          <div className="bg-white rounded-lg overflow-hidden text-black hover:transform hover:-translate-y-1 hover:transition-all hover:duration-200 hover:shadow-lg">
            <div className="bg-gradient-to-r from-[#4DA43D] to-[#64A70B] p-3 flex justify-center">
              <Image src="/leaf.svg" alt="Check" width={56} height={56} className="text-white" />
            </div>
            <div className="px-6 py-5">
              <h3 className="text-2xl font-bold mb-1">Drive Sustainability</h3>
              <p>Deliver ESG commitments and create value.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Review Button */}
      <a
        href="https://lorprod.workzonehr.cfapps.eu10.hana.ondemand.com/site#workzone-home&/home/mTkE3onMM9dv6cFu687Qq2"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#FFCD00] hover:bg-[#e0a930] text-black font-medium py-3 px-8 rounded-md transition-colors cursor-pointer"
      >
        Review Our Strategy
      </a>
    </div>
  );
}
