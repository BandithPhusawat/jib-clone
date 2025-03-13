import React from "react";
import SearchBar from "./SearchBar";
import CardProduct from "./CardProduct";

export default function Products() {
  return (
    <div className="w-[1392px] mx-auto h-auto space-y-4">
      <SearchBar />
      <div className="px-12 pt-4 flex w-full justify-between">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <CardProduct key={index} />
        ))}
      </div>
      <div className="px-12 flex w-full justify-between">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <CardProduct key={index} />
        ))}
      </div>
      <div className="px-12 flex w-full justify-between">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <CardProduct key={index} />
        ))}
      </div>
      <div className="px-12 flex w-full justify-between">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <CardProduct key={index} />
        ))}
      </div>
      <div className="px-12 flex w-full justify-between">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <CardProduct key={index} />
        ))}
      </div>
      <div className="px-12 flex w-full justify-between">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <CardProduct key={index} />
        ))}
      </div>
      <div className="w-full h-16 flex justify-end items-center gap-2.5 px-12">
        <div className="bg-[#221692] w-8 h-8 rounded-lg text-white flex justify-center items-center font-bold text-base">
          1
        </div>
        <div className="w-8 h-8 rounded-lg text-[#646464] flex justify-center items-center font-bold text-base">
          2
        </div>
        <div className="w-8 h-8 rounded-lg text-[#646464] flex justify-center items-center font-bold text-base">
          3
        </div>
        <div className="w-8 h-8 rounded-lg text-[#646464] flex justify-center items-center font-bold text-base">
          4
        </div>
        <div className="w-8 h-8 rounded-lg text-[#646464] flex justify-center items-center font-bold text-base">
          ...
        </div>
        <div className="w-8 h-8 rounded-lg text-[#646464] flex justify-center items-center font-bold text-base">
          n
        </div>
      </div>
    </div>
  );
}
