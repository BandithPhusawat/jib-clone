"use client";

import React from "react";
import { Noto_Sans_Thai } from "next/font/google";
import { ArrowCompare, LanguageIcon, PinMarker } from "@/svg";
import { RiArrowDownSLine } from "react-icons/ri";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-thai",
});

export default function HeaderTitle() {
  return (
    <div
      className={`flex justify-between items-center px-6 py-2 bg-white ${notoSansThai.className}`}
    >
      <div className="text-[#4E4E4E] text-xs">
        JIB จำหน่ายสินค้าไอที คอมประกอบ โน้ตบุ๊ค สินค้า Apple ให้คำแนะนำทุกสาขา
        และช้อปออนไลน์ ส่งด่วน 24 ชม.
      </div>
      <div className="flex justify-center items-center gap-2.5 text-[#4E4E4E]">
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <ArrowCompare /> เปรียบเทียบ
        </div>
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <PinMarker /> ค้นหาสาขาที่ใกล้คุณ
        </div>
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <LanguageIcon /> <span>TH</span>{" "}
          <RiArrowDownSLine className="scale-150" />
        </div>
      </div>
    </div>
  );
}
