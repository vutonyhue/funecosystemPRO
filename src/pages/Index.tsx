import HeroSection from "@/components/landing/HeroSection";
import VisionSection from "@/components/landing/VisionSection";
import ChakrasSection from "@/components/landing/ChakrasSection";
import PrinciplesSection from "@/components/landing/PrinciplesSection";
import LeadershipSection from "@/components/landing/LeadershipSection";
import MantrasSection from "@/components/landing/MantrasSection";
import Footer from "@/components/landing/Footer";
import AngelAIChatButton from "@/components/angel-ai/AngelAIChatButton";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>FUN Ecosystem – Nền Kinh Tế Ánh Sáng 5D | Web3 + AI + Tình Yêu</title>
        <meta
          name="description"
          content="Hệ sinh thái Web3 + AI + Ánh Sáng đầu tiên, nơi con người sáng tạo – chia sẻ – nhận lại – tiến hóa trong tình yêu thuần khiết. Khám phá FUN Profile, FUN Charity và 16 nền tảng ánh sáng."
        />
        <meta property="og:title" content="FUN Ecosystem – Nền Kinh Tế Ánh Sáng 5D" />
        <meta
          property="og:description"
          content="Hệ sinh thái Web3 + AI + Ánh Sáng đầu tiên, nơi con người sáng tạo và tiến hóa trong tình yêu thuần khiết."
        />
      </Helmet>

      <main className="min-h-screen">
        <HeroSection />
        <VisionSection />
        <ChakrasSection />
        <PrinciplesSection />
        <LeadershipSection />
        <MantrasSection />
        <Footer />
      </main>
      
      <AngelAIChatButton />
    </>
  );
};

export default Index;
