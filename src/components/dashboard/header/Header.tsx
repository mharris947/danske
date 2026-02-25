'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { RiLogoutCircleLine } from 'react-icons/ri';

export default function Header({ handleLogout, user }: any) {
  const [open, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full min-h-[30px] relative flex items-center justify-between bg-white border-b-4 border-[#003755] p-[16px] py-[15px]">
      <Image src="https://i.imgur.com/FXBdEzD.jpeg" width={180} height={27} className="w-[170px] h-[27px]" alt="logo" />

      <div className="relative">
        {user.holder.profileImgUrl ? (
          <Image src={user.holder.profileImgUrl} width={40} height={40} className="w-[50px] h-[50px] rounded-full" alt="logo" onClick={toggleNav} />
        ) : (
          <RiLogoutCircleLine className="text-2xl text-[#003755]" onClick={toggleNav} />
        )}

        {open && (
          <div className="absolute mt-1 z-50 shadow bg-white border py-2 rounded-md right-0 flex flex-col justify-center gap-[5px]">
            <p className="text-[14px] px-[15px] py-[5px] whitespace-nowrap font-medium text-[#003755]">
              {user.holder.fullName}&nbsp;{user.holder.lastName}
            </p>
            <p className="text-[14px] m-1 px-[15px] text-center rounded-md py-[5px] bg-[#003755] border whitespace-nowrap text-white" onClick={handleLogout}>
              Sign out
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
