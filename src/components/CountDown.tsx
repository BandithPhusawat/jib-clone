import React from "react";

export default function CountDown() {
  return (
    <div className="w-[1440px] h-12 flex justify-center items-center gap-4">
      <TimeBox number="00" />
      <div className="text-[#221692]">ชม</div>
      <TimeBox number="00" />
      <div className="text-[#221692]">นาที</div>
      <TimeBox number="00" />
      <div className="text-[#221692]">วินาที</div>
    </div>
  );
}

interface TimeBoxProps {
  number: string;
}

const TimeBox = ({ number }: TimeBoxProps) => {
  return (
    <div className="w-12 h-12 bg-[#FDAF17] rounded-lg flex justify-center items-center font-bold text-white">
      {number}
    </div>
  );
};
