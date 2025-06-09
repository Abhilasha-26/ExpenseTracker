import React from 'react';
import BudgetList from './_components/BudgetList'

function Budget() {
  return (
    <div className='p-10'>
      <h2 className='font-extraboldbold text-5xl p-1'>My Budgets</h2>
      <BudgetList/>
    </div>
  )
}

export default Budget
