import PricingSection from "@/components/ui/pricing";
import WhatYouCanBuild from "@/components/blocks/what-you-can-build";
import FAQs from "@/components/ui/faqs-component";

export default function PricingPage() {
  return (
    <>
      <div className="border-b">
        <PricingSection />
      </div>
      <div className="border-b">
        <WhatYouCanBuild />
      </div>
      <div className="border-b">
        <FAQs />
      </div>
    </>
  );
}
