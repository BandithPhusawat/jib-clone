import React from "react";
import { BiCog } from "react-icons/bi";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";

export default function SearchBar() {
  return (
    <div className="w-full h-8 px-12 flex justify-between items-center">
      <div className="w-1/2 flex justify-start items-center gap-4 text-base">
        <div className="flex bg-[#F4F6F8] w-[138px] h-8 rounded-[99px] justify-center items-center gap-1 text-[#221692] cursor-pointer">
          <BiCog /> ตั้งค่าการค้นหา
        </div>
        <div>ผลการค้นหา :</div>
        <div className="text-[#221692]">การ์ดจอ</div>
        <div className="text-sm text-[#646464]">(123 รายการ)</div>
      </div>
      <div className="w-1/2 flex justify-end items-center gap-4 text-base">
        <div className="relative">
          <input
            type="text"
            placeholder="ค้นหาสิ่งที่ต้องการ"
            className="w-[288px] h-8 rounded-full bg-[#F4F6F8] focus:outline-none focus:ring-0 pl-5 text-sm text-[#646464]"
          ></input>
          <IoMdSearch className="absolute right-5 top-1/2 transform  -translate-y-1/2 scale-125" />
        </div>
        <div className="text-base">เรียงตาม :</div>
        <div className="h-8 w-[132px] bg-[#F4F6F8] text-[#221692] rounded-full flex justify-center items-center gap-1 cursor-pointer">
          สินค้าแนะนำ <IoIosArrowDown className="pt-0.5 scale-125" />
        </div>
      </div>
    </div>
  );
}
