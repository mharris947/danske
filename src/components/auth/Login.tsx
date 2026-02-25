'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { mockAccounts } from '../mockData/MockData';
import Header from '../header/Header';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAccount = mockAccounts.find(account => account.holder.username === username);
    if (!userAccount) {
      setError('User not found');
      return;
    }
    if (userAccount.holder.password !== password) {
      setError('Invalid password');
      return;
    }
    // Store user data in localStorage
    localStorage.setItem('loggedInUser', JSON.stringify(userAccount));
    router.push('/dashboard');
  };

  return (
    <div className="bg-[#f3f2f2] h-screen relative">
      <div className="p-4 px-6">
        <div className="mx-auto bg-[#ffffffb3] rounded-sm w-full p-7 mt-10">
          <Header />
          <h2 className="text-lg text-center text-[#003755] font-[500] mb-5">Log on to eBanking</h2>
          {error && <p className="text-[20px] my-5 text-center mx-auto max-w-[200px] rounded-md flex items-center justify-center text-red-600">{error}</p>}
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-3">
                <label htmlFor="userId">User ID</label>
                <input
                  type="text"
                  value={username}
                  className="p-4 bg-white text-[#5c5c5c] placeholder:text-gray-600 bg-transparent border border-gray-300 outline-none"
                  onChange={e => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="Passcode">Passcode</label>

                <input
                  type="password"
                  value={password}
                  className="p-4 bg-white text-[#5c5c5c] placeholder:text-gray-600 bg-transparent border border-gray-300 outline-none"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-2 mt-6">
              <button type="submit" className="p-4 py-3 bg-[#007bc7] rounded-full w-full text-white font-semibold">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full min-h-[70px] text-base text-black absolute bottom-0 z-50 flex flex-col gap-3 px-6 p-[20px]">
        <p>
          Lines are open between 8am - 6pm Monday to Friday, 9am - 1pm Saturdays and closed Sundays, except on bank holidays or other holidays in Northern Ireland when the bank is not open for
          business. Call charges may vary. Please contact your phone company for details. We may record or monitor calls to confirm details of our conversations, and for verification and quality
          purposes.
        </p>
        <p>Copyright © 2025 Danske Bnk Group</p>
      </div>
    </div>
  );
}
