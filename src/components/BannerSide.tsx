"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export default function BannerSide() {
  return (
    <div className="w-full max-w-[1440px] h-[354px] mx-auto py-6">
      <Swiper
        loop={true}
        spaceBetween={-60}
        slidesPerView={1.15}
        centeredSlides={true}
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <SwiperSlide
            key={index}
            className="transition-transform duration-300"
          >
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src="/Banner/banner.png"
                alt="banner"
                width={1276}
                height={306}
                className="w-full max-w-[1276px] h-auto rounded-lg object-contain bg-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-slide {
          transform: scale(0.85);
          transition: transform 0.3s ease-in-out;
          opacity: 0.6;
        }
        .swiper-slide-active {
          transform: scale(1);
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
