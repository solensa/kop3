"use client";

import { useState } from "react";
import Image from "next/image";

const leftTabs = [
  {
    label: "ASPIRATION",
    content: {
      question:
        "Does this person have a strong drive and aspiration to achieve at present? (this can change depending on what's happening in colleagues' lives)",
      looksLike: [
        "A clear aspiration to grow",
        "Persistence",
        "Resilience",
        "A vision to change beyond the status quo",
      ],
    },
  },
  {
    label: "AGILITY",
    content: {
      question: "Agility question here...",
      looksLike: ["Agility example 1", "Agility example 2"],
    },
  },
  {
    label: "ABILITY",
    content: {
      question: "Ability question here...",
      looksLike: ["Ability example 1", "Ability example 2"],
    },
  },
];

const rightTabs = [
  {
    label: "DEVELOPING",
    content: {
      meaning: "Developing meaning here...",
      looksLike: ["Developing example 1", "Developing example 2"],
    },
  },
  {
    label: "DELIVERING",
    content: {
      meaning:
        "Does this person have a strong drive and aspiration to achieve at present? (this can change depending on what's happening in colleagues' lives)",
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
      meaning: "Excelling meaning here...",
      looksLike: ["Excelling example 1", "Excelling example 2"],
    },
  },
];

export default function Box() {
  const [leftIndex, setLeftIndex] = useState(1); // AGILITY default
  const [rightIndex, setRightIndex] = useState(1); // DELIVERING default

  // Height for the header area to align toggles
  const headerHeight = 220;

  return (
    <div style={{ position: "relative", maxWidth: "1000px", margin: "0 auto", paddingTop: "40px" }}>
      {/* Dotted green vertical line through the centre, extending above the box */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          transform: "translateX(-50%)",
          height: "calc(100% + 60px)",
          width: 0,
          borderLeft: "3px dotted #6aff7f",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
      {/* Dotted green border around the box */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          background: "linear-gradient(135deg, #0a2a2f 0%, #1a3c2f 100%)",
          borderRadius: "20px",
          padding: "2rem",
          color: "white",
          border: "3px dotted #6aff7f",
          position: "relative",
          zIndex: 3,
        }}
      >
        {/* Left Column */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Header area with fixed height for alignment */}
          <div
            style={{
              textAlign: "center",
              minHeight: headerHeight,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2>Understanding Potential</h2>
            <p>Potential is both static and ever-changing…</p>
            <Image
              src="/pot.svg"
              alt="pot"
              width={120}
              height={120}
              style={{ margin: "2rem auto" }}
            />
          </div>
          {/* Toggles with outline */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              margin: "1rem 0",
              border: "2px solid #2e4d3a",
              borderRadius: "24px",
              padding: "0.5rem",
              background: "#0f2327",
              alignSelf: "center",
              minWidth: 0,
            }}
          >
            {leftTabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setLeftIndex(i)}
                style={{
                  padding: "0.5rem 1.5rem",
                  borderRadius: "20px",
                  border: "none",
                  background: i === leftIndex ? "#1a3c2f" : "transparent",
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
              background: "#112a2f",
              borderRadius: "12px",
              padding: "1rem",
              marginTop: "1rem",
              display: "flex",
              gap: "2rem",
            }}
          >
            <div style={{ flex: 1, paddingRight: "1rem", borderRight: "2px solid #2e4d3a" }}>
              <strong>Questions</strong>
              <p>{leftTabs[leftIndex].content.question}</p>
            </div>
            <div style={{ flex: 1, paddingLeft: "1rem" }}>
              <strong>What it looks like</strong>
              <ul>
                {leftTabs[leftIndex].content.looksLike.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* Header area with fixed height for alignment */}
          <div
            style={{
              textAlign: "center",
              minHeight: headerHeight,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2>Understanding Performance</h2>
            <p>
              Performance considers results against current goals, as a measure of delivery over a
              period of time…
            </p>
            <Image
              src="/perf.svg"
              alt="perf"
              width={120}
              height={120}
              style={{ margin: "2rem auto" }}
            />
          </div>
          {/* Toggles with outline */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              margin: "1rem 0",
              border: "2px solid #2e4d3a",
              borderRadius: "24px",
              padding: "0.5rem",
              background: "#0f2327",
              alignSelf: "center",
              minWidth: 0,
            }}
          >
            {rightTabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setRightIndex(i)}
                style={{
                  padding: "0.5rem 1.5rem",
                  borderRadius: "20px",
                  border: "none",
                  background: i === rightIndex ? "#1a3c2f" : "transparent",
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
              background: "#112a2f",
              borderRadius: "12px",
              padding: "1rem",
              marginTop: "1rem",
              display: "flex",
              gap: "2rem",
            }}
          >
            <div style={{ flex: 1, paddingRight: "1rem", borderRight: "2px solid #2e4d3a" }}>
              <strong>What it means</strong>
              <p>{rightTabs[rightIndex].content.meaning}</p>
            </div>
            <div style={{ flex: 1, paddingLeft: "1rem" }}>
              <strong>What it looks like</strong>
              <ul>
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
