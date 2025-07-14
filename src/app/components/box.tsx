"use client";

import { useState } from "react";
import Image from "next/image";

const leftTabs = [
  {
    label: "ASPIRATION",
    content: {
      question:
        "Does this person have the aspiration to take on new and more complex roles / projects now? (this can change depending on what's happening in colleagues' lives)",
      looksLike: [
        "Someone with high aspiration demonstrates:",
        "A clear appetite to grow and invest in their development",
        "A proactive approach to taking on new opportunities",
      ],
    },
  },
  {
    label: "ABILITY",
    content: {
      question: "Does this person have a strong level of intellectual and emotional ability?",
      looksLike: [
        "Someone with high ability demonstrates",
        "Emotional capacity to navigate social situations, demonstrate empathy and build relationships",
        "Intellectual ability is being able to understand and solve complex problems, and a vision to change beyond the status quo.",
      ],
    },
  },
  {
    label: "AGILITY",
    content: {
      question:
        "Does this person demonstrate curiosity, learn rapidly, adapt, and apply new knowledge or skills in unfamiliar situations?",
      looksLike: [
        "Someone with a high learning agility is",
        "able to learn flexibly and rapidly, and",
        "thrive in new, changing, or ambiguous environments, and",
        "resilience to bounce back from failure or difficulty",
      ],
    },
  },
];

const rightTabs = [
  {
    label: "DEVELOPING",
    content: {
      meaning: "Inconsistent performance.",
      looksLike: [
        "Inconsistent performance across the year",
        "Some progress made against goals, while others not achieved",
        "New to role and on a learning curve",
        "Needs to develop the skills and capability to increase performance",
      ],
    },
  },
  {
    label: "DELIVERING",
    content: {
      meaning: "Meeting expectations.",
      looksLike: [
        "Consistent performance across the year",
        "Meets goals of the role, and contributes well",
        "Often assigned to new projects delivering successful results",
        "Able to manage themselves, and can be a self-starter",
      ],
    },
  },
  {
    label: "EXCELLING",
    content: {
      meaning: "Exceeding Expectations.",
      looksLike: [
        "Consistently exceeds the requirements of the role",
        "Recognised for their significant contribution",
        "Able to adapt goals and strategies to meet changing demands",
        "Is focused toward sustained and meaningful results",
      ],
    },
  },
];

export default function Box() {
  const [leftIndex, setLeftIndex] = useState(0); // AGILITY default
  const [rightIndex, setRightIndex] = useState(0); // DELIVERING default

  const headerHeight = 220;

  return (
    <div style={{ maxWidth: "1060px", minHeight: "820px", margin: "0 auto" }}>
      <div
        style={{
          minHeight: "820px",
          position: "relative",
          display: "flex",
          gap: "20px",
          background: "linear-gradient(135deg, #0a2a2f 0%, #1a3c2f 100%)",
          borderRadius: "10px",
          padding: "35px 10px",
          color: "white",
          border: "1px dotted #6aff7f",
          zIndex: 1,

          boxSizing: "border-box",
        }}
      >
        {/* Dotted green vertical line INSIDE the box, extends above */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "-80px", // extends above the box
            bottom: 0,
            transform: "translateX(-50%)",
            width: 0,
            borderLeft: "1px dotted #6aff7f",
            zIndex: 2,
            pointerEvents: "none",
            height: "calc(100% + 80px)",
          }}
        />
        {/* Left Column */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            zIndex: 3,
            padding: "0 10px",
            boxSizing: "border-box",
          }}
        >
          {/* Header area, aligned from the top */}
          <div style={{ textAlign: "center" }}>
            <span
              className="text-[24px] font-semibold text-white whitespace-nowrap"
              style={{ marginTop: 0 }}
            >
              Understanding Potential
            </span>
            <p className="mt-2 text-[14px] font-normal">
              Potential is both static and ever-changing…
            </p>
            <Image src="/pot.svg" alt="pot" width={300} height={120} style={{ margin: "0 auto" }} />
          </div>
          {/* Toggles with outline */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0px",
              margin: "1rem 0",
              border: "1px solid #40603E",
              borderRadius: "50px",
              padding: "0.5rem",
              background: "#0f2327",
              alignSelf: "center",
              minWidth: 0,
              fontSize: "14px",
            }}
          >
            {leftTabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setLeftIndex(i)}
                style={{
                  padding: "0.5rem 1.5rem",
                  borderRadius: "50px",

                  background: i === leftIndex ? "rgba(255, 255, 255, 0.2)" : "transparent",
                  border: i === leftIndex ? "1px solid #C2C2C2" : "transparent",
                  color: i === leftIndex ? "#fff" : "#aaa",
                  fontWeight: i === leftIndex ? "bold" : "normal",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Content in two columns with vertical divider */}
          <div
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "1rem",
              marginTop: "1rem",
              display: "flex",
              gap: "2rem",
              width: "100%",
              boxSizing: "border-box",
              color: "#000",
            }}
          >
            <div
              style={{
                flex: 1,
                paddingRight: "15px",
                borderRight: "1px dotted #2e4d3a",
                boxSizing: "border-box",
              }}
            >
              <strong className="text-[14px]">Questions</strong>
              <p className="text-[14px] font-normal">{leftTabs[leftIndex].content.question}</p>
            </div>
            <div style={{ flex: 1 }}>
              <strong className="text-[14px] ml-[-10px]">What it looks like</strong>
              <ul className="text-[14px] font-normal list-disc pl-[0px]">
                {leftTabs[leftIndex].content.looksLike.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            zIndex: 3,
            padding: "0 10px",
            boxSizing: "border-box",
          }}
        >
          {/* Header area, aligned from the top */}
          <div style={{ textAlign: "center", minHeight: headerHeight }}>
            <span
              className="text-[24px] font-semibold text-white whitespace-nowrap"
              style={{ marginTop: 0 }}
            >
              Understanding Performance
            </span>
            <p className="mt-2 mb-[70px] text-[14px] font-normal">
              Performance considers results against current goals, as a measure of delivery over a
              period of time…
            </p>
            <Image
              src="/perf.svg"
              alt="perf"
              width={450}
              height={120}
              style={{ margin: "20px auto 70px auto" }}
            />
          </div>
          {/* Toggles with outline */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0px",
              margin: "1rem 0",
              border: "1px solid #40603E",
              borderRadius: "50px",
              padding: "0.5rem",
              background: "#0f2327",
              alignSelf: "center",
              minWidth: 0,
              fontSize: "14px",
            }}
          >
            {rightTabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setRightIndex(i)}
                style={{
                  padding: "0.5rem 1.5rem",
                  borderRadius: "50px",
                  background: i === rightIndex ? "rgba(255, 255, 255, 0.2)" : "transparent",
                  border: i === rightIndex ? "1px solid #C2C2C2" : "transparent",
                  color: i === rightIndex ? "#fff" : "#aaa",
                  fontWeight: i === rightIndex ? "bold" : "normal",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {/* Content in two columns with vertical divider */}
          <div
            style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "1rem",
              marginTop: "1rem",
              width: "100%",
              boxSizing: "border-box",
              display: "block", // stack vertically
              color: "#000",
            }}
          >
            <div className="text-[14px] font-normal" style={{ marginBottom: "1.5rem" }}>
              <strong>What it means</strong>
              <p>{rightTabs[rightIndex].content.meaning}</p>
            </div>
            <div className="text-[14px] font-normal">
              <strong>What it looks like</strong>
              <ul className="text-[14px] font-normal list-disc pl-4">
                {rightTabs[rightIndex].content.looksLike.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
