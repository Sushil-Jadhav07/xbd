"use client";

import React from "react";
import { useTheme } from "@/contexts/ThemeContext";

const fallbackData = {
  titleLine1: "AI Is Not a Technology Shift.",
  titleLine2: "It Is an Operating Model Shift",
  quote:
    '"Most AI programmes train people to use tools. REWIRE rewires how organisations think."',
  leftHeader: "Most AI training looks like this",
  rightHeader: "REWIRE looks like this",
  comparisonRows: [
    {
      leftText: "Tool adoption workshops for individuals",
      rightText: "Operating model redesign for leadership teams",
    },
    {
      leftText: "AI fluency for employees",
      rightText: "AI institutionalisation across functions",
    },
    {
      leftText: "Case studies from other industries",
      rightText: "Live pilots built from your own organisation's context",
    },
    {
      leftText: "Certificate on completion",
      rightText: "Deployable governance charter and AI playbook",
    },
    {
      leftText: '"How to use AI" training',
      rightText: '"How to lead with AI" transformation',
    },
  ],
};

const LearningModelShift = ({ learningModelShiftData }) => {
  const { theme, mounted } = useTheme();
  const isDarkTable = mounted && theme === "dark";
  const data = learningModelShiftData
    ? { ...fallbackData, ...learningModelShiftData }
    : fallbackData;
  const highlightPhrase = "Operating Model Shift";
  const titleLine2Text = data.titleLine2 || "";
  const highlightRegex = new RegExp(highlightPhrase, "i");
  const hasHighlight = highlightRegex.test(titleLine2Text);
  const titleLine2Prefix = hasHighlight
    ? titleLine2Text.replace(highlightRegex, "").trim()
    : titleLine2Text;
  const titleLine2Highlight = hasHighlight
    ? titleLine2Text.match(highlightRegex)?.[0]
    : "";

  return (
    <section className="bg-white md:mx-[15px] mx-[5px] py-12 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="space-y-5 lg:space-y-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-black leading-tight">
              {data.titleLine1}
            </h2>
            <h3 className="mt-1 leading-tight">
              <span className="text-2xl md:text-4xl font-bold text-black">
                {titleLine2Prefix}
                {hasHighlight ? " " : ""}
              </span>
              {hasHighlight ? (
                <span className="text-3xl md:text-5xl font-extrabold text-[#9d7035] uppercase">
                  {titleLine2Highlight}
                </span>
              ) : null}
            </h3>
          </div>

          <p className="text-base md:text-xl font-semibold text-black leading-[1.25] max-w-[1200px]">
            {data.quote}
          </p>

          <div
            className={`overflow-hidden rounded-sm border ${
              isDarkTable ? "border-[#2a2a2a]" : "border-[#d8d8d8]"
            }`}
          >
            <div className="grid grid-cols-[1fr_44px_1fr] md:grid-cols-[1fr_56px_1fr] text-sm md:text-2xl font-semibold">
              <div
                className={`px-4 py-3 ${
                  isDarkTable
                    ? "bg-[#2b2b2b] text-white"
                    : "bg-[#b9b9b9] text-[#1f1f1f]"
                }`}
              >
                {data.leftHeader}
              </div>
              <div
                className={`text-[#9d7035] text-center px-2 py-3 ${
                  isDarkTable ? "bg-[#1f1f1f]" : "bg-[#e3e3e3]"
                }`}
              >
                &#8594;
              </div>
              <div className="bg-[#9d7a1f] text-white px-4 py-3">{data.rightHeader}</div>
            </div>

            <div className={isDarkTable ? "bg-[#171717]" : "bg-[#efefef]"}>
              {data.comparisonRows?.map((row, index) => (
                <div
                  key={`${row.leftText}-${index}`}
                  className={`grid grid-cols-[1fr_44px_1fr] md:grid-cols-[1fr_56px_1fr] border-t text-xs md:text-lg leading-[1.2] ${
                    isDarkTable
                      ? `border-[#2a2a2a] ${
                          index % 2 === 0 ? "bg-[#171717]" : "bg-[#1b1b1b]"
                        }`
                      : `border-white/70 ${
                          index % 2 === 0 ? "bg-[#ededed]" : "bg-[#e6e6e6]"
                        }`
                  }`}
                >
                  <div className={`px-4 py-4 ${isDarkTable ? "text-white" : "text-[#3a3a3a]"}`}>
                    {row.leftText}
                  </div>
                  <div
                    className={`text-center px-2 py-4 ${
                      isDarkTable ? "text-white" : "text-[#474747]"
                    }`}
                  >
                    &#8594;
                  </div>
                  <div className="px-4 py-4 text-[#9d7035]">{row.rightText}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningModelShift;
