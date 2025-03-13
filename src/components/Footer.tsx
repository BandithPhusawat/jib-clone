"use client";

import { PaymentIcon, PromotionSale, TransportIcon, WaruntyIcon } from "@/svg";
import Image from "next/image";

import React from "react";
import Contact from "./Contact";

export default function Footer() {
  return (
    <div className="w-full h-auto">
      <div className="bg-[#F4F6F8] flex justify-center items-center w-full h-auto gap-20">
        <WaruntyIcon /> <PromotionSale /> <TransportIcon /> <PaymentIcon />
      </div>
      <div className="h-auto w-[1440px] mx-auto ">
        <div className="w-[1392px] h-auto pb-10 flex flex-row mx-auto justify-between text-white pt-[72px]">
          <div className="w-1/5 h-full">
            <div className="flex justify-center">
              <Image
                alt="logo"
                src="/footer/logo-jib.png"
                width={89.6}
                height={64}
              />
            </div>
            <div className="text-base font-bold pt-2">
              J.I.B Computer Group Co. ,Ltd.
            </div>
            <div className="text-sm font-bold pt-4">
              <p>เลขที่ 21 ถนนพหลโยธิน แขวงสนามบิน เขตดอนเมือง </p>
              <p>กรุงเทพฯ 10210</p>
              <p>Tel. : 02-017-4444</p>
            </div>
            <div className="pt-4">
              <p className="text-base font-bold">เครื่องหมายรับรอง</p>
              <div className="flex gap-4 pt-3">
                <Image
                  alt="logo"
                  src="/footer/icon_col_1/1.png"
                  width={48}
                  height={50}
                />
                <Image
                  alt="logo"
                  src="/footer/icon_col_1/2.png"
                  width={127}
                  height={50}
                />
              </div>
            </div>
          </div>
          <div className="w-1/5 space-y-4">
            <p className="text-base">เจไอบีออนไลน์</p>
            <p className="text-sm">สินค้า</p>
            <p className="text-sm">ข่าวสาร</p>
            <p className="text-sm">เกี่ยวกับเรา</p>
            <p className="text-sm">ติดต่อเรา</p>
            <p className="text-sm">เจไอบีดีอย่างไร</p>
          </div>
          <div className="w-1/5 space-y-4">
            <p className="text-base">ฝ่ายสนับสนุน</p>
            <p className="text-sm">แผนที่สาขา</p>
            <p className="text-sm">ตำแหน่งงานว่าง</p>
            <p className="text-sm">เช็คประกันสินค้า</p>
            <p className="text-sm">นิตยสารออนไลน์ ม.ค. 2567</p>
          </div>
          <div className="w-1/5 space-y-4">
            <p className="text-base">แผนกบริการลูกค้า</p>
            <p className="text-sm">วิธีการสั่งซื้อสินค้า</p>
            <p className="text-sm">ตรวจสอบสถานะสินค้า</p>
            <p className="text-sm">วิธีการชำระเงิน</p>
            <p className="text-sm">การเปลี่ยนคืนสินค้า</p>
            <p className="text-sm">การใช้คูปองส่วนลด</p>
          </div>
          <div className="w-1/5 space-y-4">
            <p className="text-base">ติดต่อสอบถาม</p>
            <p className="text-sm">Tiktok : jibofficial</p>
            <p className="text-sm">Youtube : Jib Channel</p>
            <p className="text-sm">Line ID : @jibonline</p>
            <p className="text-sm">Instagram : jib.online</p>
            <p className="text-sm">Facebook : JIB Computer Group</p>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
}
