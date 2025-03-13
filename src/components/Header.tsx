import { FavoriteIcon, ProfileICon, ShoppingIcon } from "@/svg";
import Image from "next/image";
import React from "react";
import { IoMdSearch } from "react-icons/io";

export default function Header() {
  return (
    <div className="h-[56px] w-full bg-gradient-to-tr from-[#221692] from-70% to-[#1A1354] px-6 flex">
      <div className="flex justify-start items-center w-fit h-full">
        <Image
          alt="logo"
          src="/Header/icon-header-1.png"
          width={30}
          height={30}
        />
      </div>
      <div className="h-full w-[1300px] mx-auto flex justify-center items-center gap-2.5">
        <Image
          alt="jib logo"
          src="/Header/logo-jib.png"
          width={52.6}
          height={40}
        />
        <div className="relative w-[1080px]">
          <IoMdSearch className="absolute left-3 top-1/2 transform  -translate-y-1/2 scale-125" />
          <input
            type="text"
            className="w-full h-8 rounded-full bg-white focus:outline-none focus:ring-0 px-5"
          ></input>
        </div>
        <div className="flex justify-center items-center gap-6 w-[144px]">
          <div className="relative cursor-pointer">
            <FavoriteIcon />
            <div className="bg-[#FDAF17] text-white px-1 rounded-full text-[8px] absolute bottom-[20%] -right-[50%]">
              99+
            </div>
          </div>
          <div className="relative cursor-pointer">
            <ShoppingIcon />
            <div className="bg-[#FDAF17] text-white px-1 rounded-full text-[8px] absolute bottom-0 -right-[35%]">
              99+
            </div>
          </div>
          <div className="cursor-pointer">
            <ProfileICon />
          </div>
        </div>
      </div>
    </div>
  );
}
