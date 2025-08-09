import FeatureSection from "@/components/web-components/Feature-Section";
import HeroSection from "@/components/web-components/HeroSection";
import PreviewSection from "@/components/web-components/PreviewSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black">
    <HeroSection/>
    <FeatureSection/>
    <PreviewSection/>
    </div>
  );
}
