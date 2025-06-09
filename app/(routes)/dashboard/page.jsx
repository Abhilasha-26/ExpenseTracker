"use client";

import React, { useEffect, useState } from 'react';
import { UserButton, useUser } from '@clerk/nextjs';
import CardInfo from './_components/CardInfo';
import { db } from '../../../utils/dbConfig';
import { budgets, expenses } from '../../../utils/schema';
import { desc, getTableColumns } from 'drizzle-orm'; 
import { sql, eq } from 'drizzle-orm'; 
import BarChartDashBoard from './_components/BarChart';
import BudgetItem from './budgets/_components/BudgetItem';
import ExpenseListTable from './expenses/_components/ExpenseListTable';
function Dashboard() {
  const { user } = useUser();
  const [budgetList, setBudgetList] = useState([]);
  const [expensesList,setExpensesList]=useState([]);

  useEffect(() => {
    user && getBudgetList();
  }, [user]);

  /**
   * Used to get the budget list 
   */
  const getBudgetList = async () => {
    const result = await db.select({
      ...getTableColumns(budgets),
      totalSpend: sql`sum(${expenses.amount})`.mapWith(Number),
      totalItem: sql`count(${expenses.id})`.mapWith(Number),
    }).from(budgets)
      .leftJoin(expenses, eq(budgets.id, expenses.budgetId))
      .where(eq(budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
      .groupBy(budgets.id);

    setBudgetList(result);
    getAllExpenses();
  };
  /**
   * used to get all the list of expenses
   */
  const getAllExpenses=async()=>{
    const result=await db.select({
      id:expenses.id,
      name:expenses.name,
      amount:expenses.amount,
      createdAt:expenses.createdAt,

    }).from(budgets)
    .rightJoin(expenses,eq(budgets.id,expenses.budgetId))
    .where(eq(expenses.createdBy,user?.primaryEmailAddress.emailAddress))
    .orderBy(desc(expenses.id));
    setExpensesList(result);
  }

  return (
    <div className='p-8'>
      <h2 className='font-bold text-4xl '>Hi, {user?.fullName} ✌️</h2>
      <p className='text-gray-800'>Here's the all summary, let's manage your money...</p>
      <CardInfo budgetList={budgetList}/>
      <div className='grid grid-cols-1 md:grid-cols-3 mt-6 gap-2'>
        <div className='md:col-span-2'>
          <BarChartDashBoard budgetList={budgetList}/>

          <ExpenseListTable expensesList={expensesList}
          refreshData={getBudgetList}/>
          
        </div>
        <div className='grid gap-3'>
          <h2 className='text-2xl font-bold'>Latest Budgets</h2>
          {budgetList.map((budget,index)=>{
            return <BudgetItem budget={budget} key={index}/>
          })}
        </div>
           
      </div>
    </div>

  );
}

export default Dashboard;
