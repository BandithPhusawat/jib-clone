import BannerSide from "@/components/BannerSide";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderTitle from "@/components/HeaderTitle";
import Products from "@/components/Product";
import Promotion from "@/components/Promotion";
import { CFooter } from "@/svg";

export default function Home() {
  return (
    <div className="w-full max-w-[1920px] mx-auto h-screen space-y-10">
      <div className="fixed w-full max-w-[1920px] mx-auto z-50">
        <HeaderTitle />
        <Header />
      </div>
      <div className="w-full max-w-[1920px] mx-auto pt-24">
        <BannerSide />
        <Content />
      </div>
      <div className="bg-[#FFB0B0] w-full max-w-[1920px] mx-auto h-auto bg-[url(/category/bg_promotion.png)] bg-contain object-contain">
        <Promotion />
      </div>
      <div className="w-full max-w-[1920px] mx-auto">
        <Products />
      </div>
      <div className="w-full max-w-[1920px] mx-auto h-auto bg-[#221692]">
        <Footer />
        <div className="w-full h-8 bg-white flex justify-center items-center text-[#4E4E4E] text-xs">
          <CFooter />
          2023 JIB COMPUTER GROUP All rights reserved
        </div>
      </div>
    </div>
  );
}
