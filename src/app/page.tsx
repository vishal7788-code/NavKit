import { NavbarFAQ } from "@/components/web-components/FAQ";
import FeatureSection from "@/components/web-components/Feature-Section";
import HeroSection from "@/components/web-components/HeroSection";
import PreviewSection from "@/components/web-components/PreviewSection";


export default function Home() {
  return (
    <div className="dark:bg-black">
    <HeroSection/>
    <FeatureSection/>
    <PreviewSection/>
    <NavbarFAQ/>
    </div>
  );
}
