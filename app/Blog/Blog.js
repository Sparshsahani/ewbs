import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";
import ServiceBanner from "@/components/ServiceBanner";
import WhatToChat from "@/pages/banner/WhatToChat";
import React from "react";

export default function Blog() {
  return (
    <>
      <ServiceBanner
        imageSrc="/images/gallery/services-banner.jpg"
        title="Explore Our"
        title2="News"
        subtitle="Meet our experts, guiding you through financial intricacies with precision"
        // hashtag="#ewbsbusiness"
      />
      <MapSection />
      <WhatToChat />
      <Footer />
    </>
  );
}
