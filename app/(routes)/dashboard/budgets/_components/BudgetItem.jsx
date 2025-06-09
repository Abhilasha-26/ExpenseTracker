import Link from 'next/link';
import React from 'react';

function BudgetItem({ budget }) {
  const spent = budget?.totalSpend ?? 0;
  const remaining = budget?.amount - spent;
  const progress = Math.min((spent / budget?.amount) * 100, 100);

  return (
    <Link href={'/dashboard/expenses/'+budget?.id}>
      <div  className='p-5 border rounded-lg hover:drop-shadow hover:shadow-md cursor-pointer h-[170px]'>
        <div className='flex gap-2 items-center justify-between'>
        <div className='flex gap-2 items-center'>
          <div className='text-2xl p-3 px-4 bg-slate-100 rounded-full'>{budget?.icon}</div>
          <div>
            <h2 className='font-semibold text-lg'>{budget?.name}</h2>
            <p className='text-sm text-slate-600'>{budget?.totalItem} Item</p>
          </div>
        </div>
        <span className='text-lg bg-green-600 text-white font-extrabold p-1 rounded'>
          Rs.{budget?.amount}
        </span>
      </div>
      <div className='mt-5'>
        <div className='flex items-center justify-between text-xs text-slate-400'>
          <span className='font-bold text-md text-gray-900'>Spent: Rs.{spent}</span>
          <span className='font-bold text-md text-cyan-950'>Remaining: Rs.{remaining}</span>
        </div>
        <div className='w-full bg-slate-300 h-2 rounded-full mt-2'>
          <div
            className='h-2 bg-green-600 rounded-full'
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      </div>
    </Link>
  );
}

export default BudgetItem;
