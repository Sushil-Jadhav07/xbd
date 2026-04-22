import React from "react";

const fallbackData = {
  heading: "Master the Framework and Lead the Change",
  subHeading: "Institutionalise AGILITY in your GROWTH DNA",
  youtubeUrl: "https://youtu.be/R7GPK8q4YR4",
  bulletPoints: [
    "Establish a unified Enterprise AI-growth Mandate",
    "Reframe AI from projects to Architecture",
    "Diagnose Enterprise AI readiness at Leadership Level",
    "Define an AI-enabled Enterprise Vision",
    "Clarify executive sponsorship & Governance intent",
    "Commit to Action through a Strategic Intent Charter",
  ],
};

const getYouTubeEmbedUrl = (url) => {
  if (!url) return "";

  let videoId = "";

  if (url.includes("youtube.com/watch")) {
    const match = url.match(/[?&]v=([^&#]*)/);
    if (match) videoId = match[1];
  } else if (url.includes("youtu.be/")) {
    const match = url.match(/youtu\.be\/([^?#&]*)/);
    if (match) videoId = match[1];
  } else if (url.includes("youtube.com/embed/")) {
    const match = url.match(/youtube\.com\/embed\/([^?#&]*)/);
    if (match) videoId = match[1];
  }

  return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1` : "";
};

const MasterFrameworkChange = ({ masterFrameworkData }) => {
  const data = masterFrameworkData || fallbackData;
  const embedUrl = getYouTubeEmbedUrl(data.youtubeUrl);

  return (
    <section className="bg-[#f5f1eb] md:mx-[15px] mx-[5px] py-10 lg:py-12 pb-[60px] lg:pb-[100px] border-b border-[#c9c9c9]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <h2 className="text-lg md:text-4xl font-semibold text-black leading-tight">
          {data.heading}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8 items-start">
          <div className="w-full max-w-[520px] bg-black rounded-md overflow-hidden aspect-video">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title={data.heading}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white text-sm">
                Add a valid YouTube URL
              </div>
            )}
          </div>

          <div>
            <h3 className="text-lg md:text-3xl font-semibold text-black leading-tight">
              {data.subHeading}
            </h3>
            <ul className="mt-4 pl-6 list-disc text-black text-sm md:text-lg leading-[1.35] space-y-1">
              {data.bulletPoints?.map((point, index) => (
                <li key={`${point}-${index}`}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterFrameworkChange;
