"use client";

import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full min-h-[70px] relative flex items-center justify-center p-[20px] py-[15px]">
      <Image src="https://i.imgur.com/FXBdEzD.jpeg" width={180} height={27} className="w-[180px] h-[35px]" alt="logo" />
    </div>
  );
}
