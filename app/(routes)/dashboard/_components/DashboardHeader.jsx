import { UserButton } from '@clerk/nextjs';
import React from 'react';

function DashboardHeader() {
  return (
    <div className="px-6 py-4 flex justify-between items-center shadow-sm border-b bg-white">
      <div className="flex gap-40 justify-between text-sm font-bold">
        <a href="/" className="text-gray-900 hover:text-green-700 transition">HOME</a>
        <a href="/dashboard/upgrade" className="text-gray-900 hover:text-green-700 transition">UPGRADE</a>
        <a href="/dashboard/about_us" className="text-gray-900 hover:text-green-700 transition">ABOUT US</a>
      </div>
      <div>
        <UserButton />
      </div>
    </div>
  );
}

export default DashboardHeader;
