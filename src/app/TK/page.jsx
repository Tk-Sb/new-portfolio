import FeatureCards from "@/components/feature-cards/feature-cards";
import HoverCard from "@/components/hover-card/hover-card";

export default function page() {
  return (
    <>
      <div className="w-full h-fit px-5 bg-black">
        <div className="px-[-20px]">
          <FeatureCards></FeatureCards>
        </div>
      </div>
    </>
  )
}