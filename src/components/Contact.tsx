import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <div className="w-full h-[148px] flex justify-end items-start text-white">
      <div className="w-1/4 text-center flex flex-col items-center">
        จัดส่งสินค้าโดย
        <Image alt="icon" src="/footer/contact/1.png" width={280} height={99} />
      </div>
      <div className="w-1/4 text-center flex flex-col items-center">
        ช่องทางการชำระ
        <Image
          alt="icon"
          src="/footer/contact/2.png"
          width={452}
          height={100}
        />
      </div>
      <div className="w-1/4 text-center flex flex-col items-center">
        ช่องทางการติดตาม
        <Image
          alt="icon"
          src="/footer/contact/3.png"
          width={270.72}
          height={80}
        />
      </div>
    </div>
  );
}
