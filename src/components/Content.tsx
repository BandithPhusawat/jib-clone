import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import CountDown from "./CountDown";
import Category from "./Category";

export default function Content() {
  return (
    <div className="w-[1440px] h-auto  mx-auto">
      <div className="text-[#646464] w-full flex justify-start items-center gap-2 px-6 cursor-pointer">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="flex items-center">
            <p>xxxxxxxxxxxx</p>
            <span className="pt-0.5">
              <IoIosArrowForward />
            </span>
          </div>
        ))}
        <p className="text-[#221692]">xxxxxxxxxxxx</p>
      </div>
      <div className="py-12">
        <CountDown />
      </div>
      <Category />
    </div>
  );
}
