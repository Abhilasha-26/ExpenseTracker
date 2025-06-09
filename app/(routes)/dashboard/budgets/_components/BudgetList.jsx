"use client"
import React from 'react'
import CreateBudget from './CreateBudget'
import {eq, getTableColumns } from 'drizzle-orm'
import { budgets, expenses } from '../../../../../utils/schema'
import {useUser} from '@clerk/nextjs'
import { db } from '../../../../../utils/dbConfig'
import { useState,useEffect } from 'react';
import { sql } from 'drizzle-orm';
import BudgetItem from './BudgetItem'



function BudgetList() {
  const [budgetList,setBudgetList]=useState([]);
  const {user}=useUser();
  useEffect(()=>{
    user&&getBudgetList();
  },[user])
  /**
   * used to get the budget list 
   */
  const getBudgetList=async()=>{
    const result=await db.select({
      ...(getTableColumns(budgets) || {}),
      totalSpend:sql`sum(${expenses.amount})`.mapWith(Number),
      totalItem:sql`count(${expenses.id})`.mapWith(Number)
    }).from(budgets)
    .leftJoin(expenses,eq(budgets.id,expenses.budgetId))
    .where(eq(budgets.createdBy,user?.primaryEmailAddress?.emailAddress))
    .groupBy(budgets.id);

    setBudgetList(result);
  }
  return (
    <div className='mt-7 p-2'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <CreateBudget refreshData={()=>getBudgetList()}/>
        {budgetList?.length>0? budgetList.map((budget,index)=>{
           return <BudgetItem key={index} budget={budget}/>
        })
      :[1,2,3,4,5].map((intem,index)=>(
        <div key={index} className='w-full bg-slate-200 rounded-lg
        h-[150px] animate-pulse'></div>

      ))
      }
      </div>
      
    </div>
  )
}

export default BudgetList
