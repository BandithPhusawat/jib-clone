"use client";

import "swiper/css/effect-coverflow";
import React from "react";
import CardItem from "./CardItem";

export default function Promotion() {
  return (
    <div className="w-[1440px] h-[544px] pt-6 mx-auto p-6">
      <div className="w-full justify-start text-white text-2xl font-bold">
        สินค้าโปรโมชั่นที่แนะนำ
      </div>
      <div
        className="w-[1392px] overflow-x-auto mx-auto pt-6 flex gap-8"
        style={{
          overflow: "hidden",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, index) => (
          <CardItem key={index} />
        ))}
      </div>
    </div>
  );
}
