import Image from "next/image";
import React from "react";

export default function Category() {
  return (
    <div className="w-full h-auto space-y-4">
      <div className="justify-center items-center flex flex-wrap gap-4">
        {CategoryList.map(
          (c, index) =>
            index < 8 && (
              <div
                key={index}
                className="text-sm text-[#221690] flex-col text-center items-center space-y-4 cursor-pointer"
              >
                <Image
                  alt={c.name}
                  src={`/category/${c.img}.png`}
                  width={96}
                  height={96}
                />
                <div className="w-[100px] h-10 text-wrap text-center font-bold">
                  {c.name}
                </div>
              </div>
            )
        )}
      </div>
      <div className="justify-center items-center flex flex-wrap gap-4">
        {CategoryList.map(
          (c, index) =>
            index > 7 && (
              <div
                key={index}
                className="text-sm text-[#221690] flex-col text-center items-center space-y-4 cursor-pointer"
              >
                <Image
                  alt={c.name}
                  src={`/category/${c.img}.png`}
                  width={96}
                  height={96}
                />
                <div className="w-[100px] h-10 text-wrap text-center font-bold">
                  {c.name}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

const CategoryList = [
  {
    name: "CPU",
    img: "cpu",
  },
  {
    name: "HARD DISK",
    img: "hdd",
  },
  {
    name: "VGS CARD",
    img: "vgs",
  },
  {
    name: "M2",
    img: "m2",
  },
  {
    name: "MAIN BOARD",
    img: "mainboard",
  },
  {
    name: "CASE",
    img: "case",
  },
  {
    name: "SOLID STATE DRIVE",
    img: "solid",
  },
  {
    name: "CPU LIQUID COOLER",
    img: "cpu_cooling",
  },
  {
    name: "RAM",
    img: "ram",
  },
  {
    name: "CPU COOLER",
    img: "cpu_fan",
  },
  {
    name: "MEMORY",
    img: "memory",
  },
  {
    name: "POWER SUPPLY",
    img: "power",
  },
  {
    name: "MONITOR",
    img: "monitor",
  },
  {
    name: "KEYBOARD",
    img: "keyboard",
  },
  {
    name: "MOUSE",
    img: "mouse",
  },
];
