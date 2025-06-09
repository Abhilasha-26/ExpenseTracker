"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function SideNav() {
  const menuList = [
    { id: 1, name: 'Dashboard', icon: LayoutGrid, path: '/dashboard' },
    { id: 2, name: 'Budgets', icon: PiggyBank, path: '/dashboard/budgets' },
    { id: 3, name: 'Expenses', icon: ReceiptText, path: '/dashboard/expense' },
    { id: 4, name: 'Upgrade', icon: ShieldCheck, path: '/dashboard/upgrade' },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="h-screen p-4 border shadow-sm">
      <Image src={'/logo.png'} alt="Logo" width={50} height={90} />
      
      <div className="mt-5">
        {menuList.map((menu) => (
          <Link href={menu.path} key={menu.id}>
            <div
              className={`flex gap-4 items-center text-gray-700 font-medium p-5 cursor-pointer
                mb-2 rounded-md hover:text-green-900 hover:bg-green-100
                ${path === menu.path ? 'text-gray-800 bg-gray-400' : ''}
              `}
            >
              {menu.name} 
              <menu.icon />
              
            </div>
          </Link>
        ))}
      </div>

      <div className="fixed bottom-10 p-5 flex gap-2 items-center">
        <UserButton />
        <span>Profile</span>
      </div>
    </div>
  );
}

export default SideNav;
