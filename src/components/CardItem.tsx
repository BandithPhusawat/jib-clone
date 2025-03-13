import { DiscountTagIcon, UnderlineDiscount } from "@/svg";
import Image from "next/image";
import React from "react";

export default function CardItem() {
  return (
    <div className="w-[240px] h-[416px] rounded-xl bg-white border-[1.6px] border-[#EDEDED] relative py-6 px-3">
      <div className="w-[192px] h-[192px] mx-auto">
        <Image
          alt="item"
          src="/products/card/product.png"
          width={199}
          height={192}
        />
      </div>
      <Image
        className="absolute top-[4%] right-[6%] scale-105"
        alt="banner"
        src="/products/card/banner.png"
        width={60.28}
        height={9.6}
      />
      <div className=" text-[#646464] text-base text-nowrap">
        <p>VGA (การ์ดแสดงผล) GALAX</p>
        <p>GEFORCE RTX 3060 (1-CL...</p>
      </div>
      <div className="w-full flex justify-between items-center pt-3">
        <div className="w-full">
          <div>
            <DiscountTagIcon />
          </div>
          <div className="flex justify-between w-full font-bold items-center">
            <div className="text-[#CECECE] text-lg relative">
              ฿ 38,990
              <div className="absolute top-[30%] right-[1%]">
                <UnderlineDiscount />
              </div>
            </div>
            <div className="text-[#454545] text-2xl">฿ 9,990</div>
          </div>
        </div>
      </div>
      <div className="text-[#221692] text-xs font-bold pt-3">
        ขายไปแล้ว <span className="text-sm">70%</span>
      </div>
      <div className="w-full h-auto pt-3">
        <div className="h-3 bg-[#EDEDED] rounded-lg pt-3 relative">
          <div className="bg-[#221692] w-1/4 left-0 top-0 h-full absolute rounded-l-lg"></div>
        </div>
      </div>
    </div>
  );
}
