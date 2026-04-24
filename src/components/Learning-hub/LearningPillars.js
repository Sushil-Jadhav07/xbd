import React from "react";
import Image from "next/image";
import pillarImage1 from "../../asset/learning-hub/1.png";
import pillarImage2 from "../../asset/learning-hub/2.png";
import pillarImage3 from "../../asset/learning-hub/3.png";

const fallbackData = {
  headingPrefix: "REWIRE",
  headingText: "Is Built on Three Interconnected Pillars",
  pillars: [
    {
      titlePrefix: "The",
      titleHighlight: "Shift",
      topDescription:
        "Markets are moving from linear value chains to intelligent, connected, adaptive systems.",
      bottomTitle: "Reframe AI before you deploy it",
      bottomDescription:
        "Most leaders are solving the wrong problem. AI is not a productivity upgrade. It is a structural shift in how value is created, decisions are made, and organisations compete.",
    },
    {
      titlePrefix: "The",
      titleHighlight: "Mechanics",
      topDescription:
        "Growth now comes from learning loops, signal capture, rapid experimentation, and reusable assets.",
      bottomTitle: "Design the operating model that AI requires.",
      bottomDescription:
        "AI does not improve a broken operating model. It accelerates it. This pillar covers how to redesign processes, data flows, and decision rights so AI compounds your advantage.",
    },
    {
      titlePrefix: "The",
      titleHighlight: "Leadership",
      topDescription:
        "Leadership capability is what turns isolated AI initiatives into institutional transformation.",
      bottomTitle: "Lead the transformation your organisation actually needs.",
      bottomDescription:
        "The last mile is always the hardest. This pillar builds leadership capability to institutionalise AI responsibly and sustain momentum beyond the initial pilot.",
    },
  ],
};

const fallbackPillarImages = [pillarImage1, pillarImage2, pillarImage3];

const LearningPillars = ({ learningPillarsData }) => {
  const data = learningPillarsData
    ? { ...fallbackData, ...learningPillarsData, pillars: learningPillarsData.pillars?.length ? learningPillarsData.pillars : fallbackData.pillars }
    : fallbackData;

  return (
    <section className="bg-white md:mx-[15px] mx-[5px] py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <h2 className="text-2xl md:text-5xl font-bold  text-black  mb-8 lg:mb-10">
          <span className="text-[#9d7035]">{data.headingPrefix}</span> {data.headingText}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start md:items-stretch">
          {data.pillars.map((pillar, index) => (
            <div key={`${pillar.titleHighlight}-${index}`} className="space-y-4 h-full flex flex-col">
              <h3 className="text-xl md:text-3xl font-semibold text-black ">
                {pillar.titlePrefix} <span className="text-[#9d7035]">{pillar.titleHighlight}</span>
              </h3>

              <p className="text-base md:text-xl font-medium text-black leading-[1.25] md:min-h-[82px]">
                {pillar.topDescription}
              </p>

              <div className="rounded-md border border-[#d6d6d680] dark:border-[#2a2a2a99] bg-[#efefef] dark:bg-[#121212] overflow-hidden h-[240px] md:h-[280px] flex items-center justify-center">
                {pillar.diagramImage?.asset?.url ? (
                  <Image
                    src={pillar.diagramImage.asset.url}
                    alt={pillar.diagramImage.alt || `${pillar.titleHighlight} diagram`}
                    width={700}
                    height={420}
                    className="w-full h-full object-contain"
                  />
                ) : fallbackPillarImages[index] ? (
                  <Image
                    src={fallbackPillarImages[index]}
                    alt={`${pillar.titleHighlight} diagram`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <p className="text-sm text-[#6b7280] dark:text-[#9ca3af]">Upload pillar diagram in Sanity</p>
                )}
              </div>

              <div className="bg-white p-6 border border-[#e9e9e980] dark:border-[#25252599] mt-6 flex-1">
                <h4 className="text-lg md:text-2xl font-semibold text-black leading-tight mb-3 md:min-h-[58px]">
                  {pillar.bottomTitle}
                </h4>
                <p className="text-sm md:text-lg text-black leading-[1.5]">
                  {pillar.bottomDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPillars;
