"use client";

import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { db } from '../../../../utils/dbConfig';
import { budgets,expenses } from '../../../../utils/schema';
import { getTableColumns } from 'drizzle-orm';
import { sql, eq, desc } from 'drizzle-orm';
import ExpenseListTable from '../expenses/_components/ExpenseListTable';

function Expense() {
  const { user } = useUser();
  const [budgetList, setBudgetList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);

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
   * Used to get all the list of expenses
   */
  const getAllExpenses = async () => {
    const result = await db.select({
      id: expenses.id,
      name: expenses.name,
      amount: expenses.amount,
      createdAt: expenses.createdAt
    }).from(budgets)
      .rightJoin(expenses, eq(budgets.id, expenses.budgetId))
      .where(eq(budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(expenses.id));

    setExpensesList(result);
  };

  return (
    <div className='p-6 border'>
        <h2 className='font-bold text-lg'>All Expenses</h2>
      <ExpenseListTable
        expensesList={expensesList}
        refreshData={getBudgetList}
      />
    </div>
  );
}

export default Expense;
