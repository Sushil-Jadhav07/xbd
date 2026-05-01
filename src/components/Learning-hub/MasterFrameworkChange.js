import React from "react";

const fallbackData = {
  heading: "Master the Framework and Lead the Change",
  subHeading: "Institutionalise AGILITY in your GROWTH DNA",
  videoUrl: "https://youtu.be/kBk6M8Qh_6k?si=WWOdVXHEHnPdVOlM",
  bulletPoints: [
    "Establish a unified Enterprise AI-growth Mandate",
    "Reframe AI from projects to Architecture",
    "Diagnose Enterprise AI readiness at Leadership Level",
    "Define an AI-enabled Enterprise Vision",
    "Clarify executive sponsorship & Governance intent",
    "Commit to Action through a Strategic Intent Charter",
  ],
};

const DEFAULT_YOUTUBE_URL = "https://youtu.be/kBk6M8Qh_6k?si=WWOdVXHEHnPdVOlM";

const getYouTubeEmbedUrl = (url) => {
  if (!url) return "";
  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname.replace("www.", "");

    if (hostname === "youtu.be") {
      const videoId = parsed.pathname.replace("/", "");
      return videoId
        ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`
        : "";
    }

    if (hostname === "youtube.com" || hostname === "m.youtube.com") {
      if (parsed.pathname.startsWith("/embed/")) {
        return `https://www.youtube.com${parsed.pathname}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`;
      }
      const videoId = parsed.searchParams.get("v");
      return videoId
        ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`
        : "";
    }
  } catch (_error) {
    return "";
  }
  return "";
};

const MasterFrameworkChange = ({ masterFrameworkData }) => {
  const data = masterFrameworkData
    ? { ...fallbackData, ...masterFrameworkData }
    : fallbackData;
  const rawVideoUrl = data.videoUrl || data.uploadedVideo?.asset?.url || DEFAULT_YOUTUBE_URL;
  const youtubeEmbedUrl = getYouTubeEmbedUrl(rawVideoUrl);

  return (
    <section className="bg-[#f5f1eb] md:mx-[15px] mx-[5px] py-10 lg:py-12 pb-[60px] lg:pb-[100px] border-b border-[#c9c9c9]">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <h2 className="text-lg md:text-4xl font-semibold text-black leading-tight">
          {data.heading}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8 items-start">
          <div className="w-full max-w-[520px] bg-black rounded-md overflow-hidden aspect-video">
            {youtubeEmbedUrl ? (
              <iframe
                className="w-full h-full"
                src={youtubeEmbedUrl}
                title="Master the Framework Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                frameBorder="0"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white text-sm">
                Add a valid YouTube video URL
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
