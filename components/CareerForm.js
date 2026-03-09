"use client";

import { useState } from "react";

export default function CareerForm() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full px-4 py-10 text-center">
      <h1 className="text-4xl font-bold text-red-600 text-center mb-4">
        Career With Us
      </h1>
      <hr className="mb-6" />

      <div className="relative w-full" style={{ minHeight: "1369px" }}>
        {/* Loader */}
        {!isLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
            {/* Spinning ring */}
            <div className="relative w-20 h-20 mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
              <div className="absolute inset-0 rounded-full border-4 border-t-red-600 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
              {/* Inner pulse dot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-red-600 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Loading text */}
            <p className="text-gray-500 text-base font-medium tracking-wide">
              Loading Career Form
            </p>
            {/* Animated dots */}
            <div className="flex gap-1 mt-2">
              <span
                className="w-2 h-2 bg-red-600 rounded-full animate-bounce"
                style={{ animationDelay: "0ms" }}
              />
              <span
                className="w-2 h-2 bg-red-600 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              />
              <span
                className="w-2 h-2 bg-red-600 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              />
            </div>
          </div>
        )}

        <iframe
          src="https://api.leadconnectorhq.com/widget/form/s1PRD6x1NGBNT68DRAnL"
          style={{
            width: "100%",
            height: "1369px",
            border: "none",
            borderRadius: "3px",
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
          id="inline-s1PRD6x1NGBNT68DRAnL"
          data-layout='{"id":"INLINE"}'
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="HR Form"
          data-height="1369"
          data-layout-iframe-id="inline-s1PRD6x1NGBNT68DRAnL"
          data-form-id="s1PRD6x1NGBNT68DRAnL"
          title="HR Form"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      <script src="https://link.msgsndr.com/js/form_embed.js" />
    </div>
  );
}
