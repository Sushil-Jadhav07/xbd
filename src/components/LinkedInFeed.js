'use client';

import Script from 'next/script';

export default function LinkedInFeed() {
  return (
    <>
    <div className="linkedin-feed-container mx-[15px] my-10">
      {/* Load Elfsight platform script */}
      <Script
        id="elfsight-platform"
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />

      {/* LinkedIn Feed Embed */}
      <div
        className="elfsight-app-254a2dfa-37c1-4a91-aa25-ba2ad4d5531a"
        data-elfsight-app-lazy
      ></div>
      </div>
    </>
  );
}
