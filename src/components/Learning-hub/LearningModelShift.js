import React from "react";

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
  const data = learningModelShiftData
    ? { ...fallbackData, ...learningModelShiftData }
    : fallbackData;

  return (
    <section className="bg-white  md:mx-[15px] mx-[5px] py-12 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="space-y-5 lg:space-y-6">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-black  leading-tight">
              {data.titleLine1}
            </h2>
            <h3 className="text-xl md:text-3xl font-semibold text-[#9d7035] mt-1">
              {data.titleLine2}
            </h3>
          </div>

          <p className="text-base md:text-2xl font-semibold text-black  leading-[1.25] max-w-[1200px]">
            {data.quote}
          </p>

          <div className="overflow-hidden rounded-sm border border-[#d0d0d0] dark:border-[#2a2a2a]">
            <div className="grid grid-cols-[1fr_44px_1fr] md:grid-cols-[1fr_56px_1fr] text-sm md:text-2xl font-semibold">
              <div className="bg-[#bdbdbd] dark:bg-[#2b2b2b] text-white  px-4 py-3">
                {data.leftHeader}
              </div>
              <div className="bg-[#d7d7d7] dark:bg-[#1f1f1f] text-[#9d7035] text-center px-2 py-3">
                &#8594;
              </div>
              <div className="bg-[#9d7a1f] text-white px-4 py-3">{data.rightHeader}</div>
            </div>

            <div className="bg-[#d7d7d7] dark:bg-[#171717]">
              {data.comparisonRows?.map((row, index) => (
                <div
                  key={`${row.leftText}-${index}`}
                  className="grid grid-cols-[1fr_44px_1fr] md:grid-cols-[1fr_56px_1fr] border-t border-white/70 dark:border-[#2a2a2a] text-xs md:text-lg leading-[1.2]"
                >
                  <div className="px-4 py-4 text-white ">{row.leftText}</div>
                  <div className="text-center px-2 py-4 text-white ">&#8594;</div>
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
