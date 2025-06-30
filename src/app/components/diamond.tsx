"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/app/components/button";
import Image from "next/image";

interface GridItem {
  id: string;
  title: string;
  performance: string;
  potential: string;
  color: string;
  hoverColor: string;
  subtitle: string;
  description: string;
}

const gridData: GridItem[] = [
  {
    id: "lateral-developing",
    title: "Requires Support",
    performance: "Developing",
    potential: "Lateral Mover",
    color: "bg-custom-orange",
    hoverColor: "#FFAC68",
    subtitle: "Address",
    description:
      "May be in the wrong role - consider what else is needed to create a better role fit. Agree actions to identify and address performance.",
  },
  {
    id: "future-developing",
    title: "Too New to Role / Requires Support",
    performance: "Developing",
    potential: "Future Growth",
    color: "bg-custom-orange",
    hoverColor: "#FFAC68",
    subtitle: "Address",
    description:
      "May be in the wrong role - consider what else is needed to create a better role fit. Agree actions to identify and address performance. (Too New To Rate) - ensure a focused onboarding programme.",
  },
  {
    id: "step-developing",
    title: "Requires Support",
    performance: "Developing",
    potential: "Step Change",
    color: "bg-custom-orange",
    hoverColor: "#FFAC68",
    subtitle: "Address",
    description:
      "May be in the wrong role - consider what else is needed to create a better role fit. Agree actions to identify and address performance.",
  },
  {
    id: "lateral-delivering",
    title: "Effective",
    performance: "Delivering",
    potential: "Lateral Mover",
    color: "bg-custom-green",
    hoverColor: "#A0E04A",
    subtitle: "Accelerate",
    description:
      "Support development through assignments, development experiments and programmes. Create more opportunities for exposure to leadership. Connect to a mentor or sponsor. Consider for succession for complex, new, novel and critical business roles.",
  },
  {
    id: "future-delivering",
    title: "Core Employee",
    performance: "Delivering",
    potential: "Future Growth",
    color: "bg-custom-green",
    hoverColor: "#A0E04A",
    subtitle: "Accelerate",
    description:
      "Support development through assignments, development experiments and programmes. Create more opportunities for exposure to leadership. Connect to a mentor or sponsor. Consider for succession for complex, new, novel and critical business roles.",
  },
  {
    id: "step-delivering",
    title: "Growth Employee",
    performance: "Delivering",
    potential: "Step Change",
    color: "bg-custom-blue",
    hoverColor: "#57C8F8",
    subtitle: "Grow",
    description:
      "Offer growth opportunities to maintain growth and engagement. Make best use of trusted professionals through knowledge sharing, mentoring and coaching. How can we impact performance?  Development?  Better use of skills? Coaching?",
  },
  {
    id: "lateral-excelling",
    title: "Trusted Professional",
    performance: "Excelling",
    potential: "Lateral Mover",
    color: "bg-custom-green",
    hoverColor: "#A0E04A",
    subtitle: "Accelerate",
    description:
      "Support development through assignments, development experiments and programmes. Create more opportunities for exposure to leadership. Connect to a mentor or sponsor. Consider for succession for complex, new, novel and critical business roles.",
  },
  {
    id: "future-excelling",
    title: "High Impact Performer",
    performance: "Excelling",
    potential: "Future Growth",
    color: "bg-custom-blue",
    hoverColor: "#57C8F8",
    subtitle: "Grow",
    description:
      "Offer growth opportunities to maintain growth and engagement. Make best use of trusted professionals through knowledge sharing, mentoring and coaching. How can we impact performance?  Development?  Better use of skills? Coaching?",
  },
  {
    id: "step-excelling",
    title: "Future Leader",
    performance: "Excelling",
    potential: "Step Change",
    color: "bg-custom-blue",
    hoverColor: "#57C8F8",
    subtitle: "Grow",
    description:
      "Offer growth opportunities to maintain growth and engagement. Make best use of trusted professionals through knowledge sharing, mentoring and coaching. How can we impact performance?  Development?  Better use of skills? Coaching?",
  },
];

export default function Diamond() {
  const [selectedItem, setSelectedItem] = useState<GridItem | null>(null);
  const [hoveredSvg, setHoveredSvg] = useState<string | null>(null);
  const [selectedSvgCategory, setSelectedSvgCategory] = useState<string | null>(null);

  // Add SVG category data
  const svgCategories = {
    orange: {
      title: "Address",
      description:
        "May be in the wrong role - consider what else is needed to create a better role fit. Agree actions to identify and address performance. (Too New To Rate) - ensure a focused onboarding programme.",
      color: "orange",
    },
    blue: {
      title: "Accelerate",
      description:
        "Offer growth opportunities to maintain growth and engagement. Make best use of trusted professionals through knowledge sharing, mentoring and coaching. How can we impact performance?  Development?  Better use of skills? Coaching?",
      color: "blue",
    },
    green: {
      title: "Grow",
      description:
        "Offer growth opportunities to maintain growth and engagement. Make best use of trusted professionals through knowledge sharing, mentoring and coaching. How can we impact performance?  Development?  Better use of skills? Coaching?",
      color: "green",
    },
  };

  const handleItemClick = (item: GridItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleSvgHover = (color: string) => {
    setHoveredSvg(color);
  };

  const handleSvgLeave = () => {
    setHoveredSvg(null);
  };

  const handleSvgClick = (category: string) => {
    setSelectedSvgCategory(category);
  };

  const closeSvgModal = () => {
    setSelectedSvgCategory(null);
  };

  return (
    <div className="min-h-screen  p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center -rotate-45">
          <div className="flex items-center gap-2 sm:gap-4 relative">
            {/* Orange SVG - Left side */}
            <div
              className="absolute left-30 -top-50 transform -translate-y-1/2 cursor-pointer transition-transform duration-200 hover:scale-125 z-20 rotate-45"
              onMouseEnter={() => handleSvgHover("orange")}
              onMouseLeave={handleSvgLeave}
              onClick={() => handleSvgClick("orange")}
            >
              <Image
                src="/orange.svg"
                alt="Orange icon"
                width={60}
                height={60}
                className="opacity-80"
              />
            </div>

            {/* Blue SVG - Top right */}
            <div
              className="absolute top-50 -right-60 cursor-pointer transition-transform duration-200 hover:scale-125 z-20 rotate-45"
              onMouseEnter={() => handleSvgHover("blue")}
              onMouseLeave={handleSvgLeave}
              onClick={() => handleSvgClick("blue")}
            >
              <Image
                src="/blue.svg"
                alt="Blue icon"
                width={60}
                height={60}
                className="opacity-80"
              />
            </div>

            {/* Green SVG - Bottom right */}
            <div
              className="absolute -bottom-50 right-30 cursor-pointer transition-transform duration-200 hover:scale-125 z-20 rotate-45"
              onMouseEnter={() => handleSvgHover("green")}
              onMouseLeave={handleSvgLeave}
              onClick={() => handleSvgClick("green")}
            >
              <Image
                src="/green.svg"
                alt="Green icon"
                width={60}
                height={60}
                className="opacity-80"
              />
            </div>

            {/* Potential label on the left with arrow */}
            <div className="flex flex-col items-center justify-center w-[50px] z-20 mt--7 ">
              <div className="flex items-center gap-2 transform rotate-90">
                <Image
                  src="/arrow.svg"
                  alt="arrow-right"
                  width={30}
                  height={24}
                  className="-rotate-135 mr-4"
                />
                <span className="text-[24px] font-semibold text-white whitespace-nowrap mr-[60px]">
                  POTENTIAL
                </span>
              </div>
            </div>

            {/* Main grid container */}
            <div className="relative">
              {/* Diamond background - positioned behind and slightly larger */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <Image
                  src="/dia-bg.svg"
                  alt="Diamond background"
                  width={750}
                  height={750}
                  className="max-w-[750px] -rotate-45"
                />
              </div>

              {/* Grid with drop shadow */}
              <div
                className="relative z-10 flex flex-col rounded-2xl overflow-hidden "
                style={{
                  filter: "drop-shadow(0px 0px 3px #FFED00)",
                }}
              >
                {/* Performance labels + Main 3x3 grid */}
                <div className="flex">
                  {/* Performance labels column (15px wide) */}
                  <div className="flex flex-col ">
                    <div
                      className="w-7 h-28 sm:h-32 lg:h-36 flex items-center justify-center font-medium text-black bg-white"
                      style={{ fontSize: "14px" }}
                    >
                      <span className="transform rotate-90 whitespace-nowrap">Step Change</span>
                    </div>
                    <div
                      className="w-7 h-28 sm:h-32 lg:h-36 flex items-center justify-center font-medium text-black bg-white"
                      style={{ fontSize: "14px" }}
                    >
                      <span className="transform rotate-90 whitespace-nowrap">Future Growth</span>
                    </div>
                    <div
                      className="w-7 h-28 sm:h-32 lg:h-36 flex items-center justify-center font-medium text-black bg-white rounded-bl-xl"
                      style={{ fontSize: "14px" }}
                    >
                      <span className="transform rotate-90 whitespace-nowrap">Lateral Mover</span>
                    </div>
                  </div>

                  {/* Main 3x3 grid */}
                  <div className="grid grid-cols-3 gap-0 diagonal-font">
                    {/* First row: Excelling */}
                    {gridData.slice(2, 3).map((item) => (
                      <div
                        key={item.id}
                        className={`
                        ${item.color}
                        w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 cursor-pointer
                        flex items-center justify-center
                        text-white font-semibold text-center p-2 sm:p-3
                        transition-all duration-200 ease-in-out
                        hover-slow-return diagonal-font
                        ${
                          (hoveredSvg === "orange" && item.color === "bg-custom-orange") ||
                          (hoveredSvg === "blue" && item.color === "bg-custom-blue") ||
                          (hoveredSvg === "green" && item.color === "bg-custom-green")
                            ? "svg-hover-effect"
                            : ""
                        }
                      `}
                        style={{ "--hover-color": item.hoverColor }}
                        onClick={() => handleItemClick(item)}
                      >
                        <span className="text-xs sm:text-sm leading-tight transform rotate-45">
                          {item.title}
                        </span>
                      </div>
                    ))}
                    {gridData.slice(5, 6).map((item) => (
                      <div
                        key={item.id}
                        className={`
                        ${item.color}
                        w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 cursor-pointer
                        flex items-center justify-center
                        text-white font-semibold text-center p-2 sm:p-3
                        transition-all duration-200 ease-in-out
                        hover-slow-return diagonal-font
                        ${
                          (hoveredSvg === "orange" && item.color === "bg-custom-orange") ||
                          (hoveredSvg === "blue" && item.color === "bg-custom-blue") ||
                          (hoveredSvg === "green" && item.color === "bg-custom-green")
                            ? "svg-hover-effect"
                            : ""
                        }
                      `}
                        style={{ "--hover-color": item.hoverColor }}
                        onClick={() => handleItemClick(item)}
                      >
                        <span className="text-xs sm:text-sm leading-tight transform rotate-45">
                          {item.title}
                        </span>
                      </div>
                    ))}
                    {gridData.slice(8, 9).map((item) => (
                      <div
                        key={item.id}
                        className={`
                        ${item.color}
                        w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 cursor-pointer
                        flex items-center justify-center
                        text-white font-semibold text-center p-2 sm:p-3
                        transition-all duration-200 ease-in-out
                        hover-slow-return diagonal-font
                        ${
                          (hoveredSvg === "orange" && item.color === "bg-custom-orange") ||
                          (hoveredSvg === "blue" && item.color === "bg-custom-blue") ||
                          (hoveredSvg === "green" && item.color === "bg-custom-green")
                            ? "svg-hover-effect"
                            : ""
                        }
                      `}
                        style={{ "--hover-color": item.hoverColor }}
                        onClick={() => handleItemClick(item)}
                      >
                        <span className="text-xs sm:text-sm leading-tight transform rotate-45">
                          {item.title}
                        </span>
                      </div>
                    ))}

                    {/* Second row: Delivering */}
                    {gridData.slice(1, 2).map((item) => (
                      <div
                        key={item.id}
                        className={`
                        ${item.color}
                        w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 cursor-pointer
                        flex items-center justify-center
                        text-white font-semibold text-center p-2 sm:p-3
                        transition-all duration-200 ease-in-out
                        hover-slow-return diagonal-font
                        ${
                          (hoveredSvg === "orange" && item.color === "bg-custom-orange") ||
                          (hoveredSvg === "blue" && item.color === "bg-custom-blue") ||
                          (hoveredSvg === "green" && item.color === "bg-custom-green")
                            ? "svg-hover-effect"
                            : ""
                        }
                      `}
                        style={{ "--hover-color": item.hoverColor }}
                        onClick={() => handleItemClick(item)}
                      >
                        <span className="text-xs sm:text-sm leading-tight transform rotate-45">
                          {item.title}
                        </span>
                      </div>
                    ))}
                    {gridData.slice(4, 5).map((item) => (
                      <div
                        key={item.id}
                        className={`
                        ${item.color}
                        w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 cursor-pointer
                        flex items-center justify-center
                        text-white font-semibold text-center p-2 sm:p-3
                        transition-all duration-200 ease-in-out
                        hover-slow-return diagonal-font
                        ${
                          (hoveredSvg === "orange" && item.color === "bg-custom-orange") ||
                          (hoveredSvg === "blue" && item.color === "bg-custom-blue") ||
                          (hoveredSvg === "green" && item.color === "bg-custom-green")
                            ? "svg-hover-effect"
                            : ""
                        }
                      `}
                        style={{ "--hover-color": item.hoverColor }}
                        onClick={() => handleItemClick(item)}
                      >
                        <span className="text-xs sm:text-sm leading-tight transform rotate-45">
                          {item.title}
                        </span>
                      </div>
                    ))}
                    {gridData.slice(7, 8).map((item) => (
                      <div
                        key={item.id}
                        className={`
                        ${item.color}
                        w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 cursor-pointer
                        flex items-center justify-center
                        text-white font-semibold text-center p-2 sm:p-3
                        transition-all duration-200 ease-in-out
                        hover-slow-return diagonal-font
                        ${
                          (hoveredSvg === "orange" && item.color === "bg-custom-orange") ||
                          (hoveredSvg === "blue" && item.color === "bg-custom-blue") ||
                          (hoveredSvg === "green" && item.color === "bg-custom-green")
                            ? "svg-hover-effect"
                            : ""
                        }
                      `}
                        style={{ "--hover-color": item.hoverColor }}
                        onClick={() => handleItemClick(item)}
                      >
                        <span className="text-xs sm:text-sm leading-tight transform rotate-45">
                          {item.title}
                        </span>
                      </div>
                    ))}

                    {/* Third row: Developing */}
                    {gridData.slice(0, 1).map((item) => (
                      <div
                        key={item.id}
                        className={`
                        ${item.color}
                        w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 cursor-pointer
                        flex items-center justify-center
                        text-white font-semibold text-center p-2 sm:p-3
                        transition-all duration-200 ease-in-out
                        hover-slow-return diagonal-font
                        ${
                          (hoveredSvg === "orange" && item.color === "bg-custom-orange") ||
                          (hoveredSvg === "blue" && item.color === "bg-custom-blue") ||
                          (hoveredSvg === "green" && item.color === "bg-custom-green")
                            ? "svg-hover-effect"
                            : ""
                        }
                      `}
                        style={{ "--hover-color": item.hoverColor }}
                        onClick={() => handleItemClick(item)}
                      >
                        <span className="text-xs sm:text-sm leading-tight transform rotate-45">
                          {item.title}
                        </span>
                      </div>
                    ))}
                    {gridData.slice(3, 4).map((item) => (
                      <div
                        key={item.id}
                        className={`
                        ${item.color}
                        w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 cursor-pointer
                        flex items-center justify-center
                        text-white font-semibold text-center p-2 sm:p-3
                        transition-all duration-200 ease-in-out
                        hover-slow-return diagonal-font
                        ${
                          (hoveredSvg === "orange" && item.color === "bg-custom-orange") ||
                          (hoveredSvg === "blue" && item.color === "bg-custom-blue") ||
                          (hoveredSvg === "green" && item.color === "bg-custom-green")
                            ? "svg-hover-effect"
                            : ""
                        }
                      `}
                        style={{ "--hover-color": item.hoverColor }}
                        onClick={() => handleItemClick(item)}
                      >
                        <span className="text-xs sm:text-sm leading-tight transform rotate-45">
                          {item.title}
                        </span>
                      </div>
                    ))}
                    {gridData.slice(6, 7).map((item) => (
                      <div
                        key={item.id}
                        className={`
                        ${item.color}
                        w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 cursor-pointer
                        flex items-center justify-center
                        text-white font-semibold text-center p-2 sm:p-3
                        transition-all duration-200 ease-in-out
                        hover-slow-return diagonal-font
                        ${
                          (hoveredSvg === "orange" && item.color === "bg-custom-orange") ||
                          (hoveredSvg === "blue" && item.color === "bg-custom-blue") ||
                          (hoveredSvg === "green" && item.color === "bg-custom-green")
                            ? "svg-hover-effect"
                            : ""
                        }
                      `}
                        style={{ "--hover-color": item.hoverColor }}
                        onClick={() => handleItemClick(item)}
                      >
                        <span className="text-xs sm:text-sm leading-tight transform rotate-45">
                          {item.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Potential labels at bottom (15px tall) */}
                <div className="flex ml-7">
                  <div
                    className="w-28 sm:w-32 lg:w-36 h-7 flex items-center justify-center font-medium text-black bg-white rounded-bl-xl"
                    style={{ fontSize: "14px" }}
                  >
                    Developing
                  </div>
                  <div
                    className="w-28 sm:w-32 lg:w-36 h-7 flex items-center justify-center font-medium text-black bg-white"
                    style={{ fontSize: "14px" }}
                  >
                    Delivering
                  </div>
                  <div
                    className="w-28 sm:w-32 lg:w-36 h-7 flex items-center justify-center font-medium text-black bg-white"
                    style={{ fontSize: "14px" }}
                  >
                    Excelling
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance label at the bottom with arrow */}
          <div className="mt-4 sm:mt-6 flex items-center gap-2" style={{ marginLeft: "120px" }}>
            <span className="text-[24px] font-semibold text-white">PERFORMANCE</span>
            <Image
              src="/arrow.svg"
              alt="arrow-right"
              width={30}
              height={24}
              className="rotate-45 ml-4"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-3 right-3 hover:bg-slate-100 rounded-full"
              onClick={closeModal}
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-3">{selectedItem.title}</h2>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-medium">
                  {selectedItem.potential}
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-medium">
                  {selectedItem.performance}
                </span>
              </div>
            </div>
            <p className="text-slate-700 leading-relaxed mb-1 ">
              <strong>{selectedItem.subtitle}</strong>
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">{selectedItem.description}</p>

            <div className="flex justify-end">
              <Button
                onClick={closeModal}
                className="bg-gradient-to-r bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg transition-all duration-200 cursor-pointer"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* SVG Category Modal */}
      {selectedSvgCategory && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeSvgModal}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-3 right-3 hover:bg-slate-100 rounded-full"
              onClick={closeSvgModal}
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-800 mb-3">
                {svgCategories[selectedSvgCategory].title}
              </h2>
              <div className="flex gap-2 text-sm">
                <span
                  className={`px-3 py-1 rounded-full font-medium ${
                    selectedSvgCategory === "orange"
                      ? "bg-custom-orange-light text-custom-orange-dark"
                      : selectedSvgCategory === "blue"
                      ? "bg-custom-blue-light text-custom-blue-dark"
                      : "bg-custom-green-light text-custom-green-dark"
                  }`}
                >
                  {selectedSvgCategory.charAt(0).toUpperCase() + selectedSvgCategory.slice(1)}{" "}
                  Category
                </span>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed mb-6">
              {svgCategories[selectedSvgCategory].description}
            </p>

            <div className="flex justify-end">
              <Button
                onClick={closeSvgModal}
                className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white px-6 py-2 rounded-lg transition-all duration-200"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .bg-custom-blue {
          background-color: #009cde !important;
        }
        .bg-custom-blue-light {
          background-color: #e6f3fa !important;
        }
        .text-custom-blue-dark {
          color: #009cde !important;
        }
        .bg-custom-orange {
          background-color: #ff7300 !important;
        }
        .bg-custom-orange-light {
          background-color: #fff4e6 !important;
        }
        .text-custom-orange-dark {
          color: #ff7300 !important;
        }
        .bg-custom-green {
          background-color: #64a70b !important;
        }
        .bg-custom-green-light {
          background-color: #f0f7e6 !important;
        }
        .text-custom-green-dark {
          color: #64a70b !important;
        }
        .hover-slow-return:hover {
          background-color: var(--hover-color) !important;
          transition: all 0.2s ease-in-out;
        }
        .hover-slow-return {
          transition: all 1.5s ease-in-out;
        }
        .svg-hover-effect {
          background-color: var(--hover-color) !important;
          transition: all 0.2s ease-in-out;
        }
      `}</style>
    </div>
  );
}
