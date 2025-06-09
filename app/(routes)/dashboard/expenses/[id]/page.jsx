"use client"
import React from 'react'
import {eq, getTableColumns,desc ,sql} from 'drizzle-orm'
import { budgets,expenses} from '../../../../../utils/schema'
import {useUser} from '@clerk/nextjs'
import { db } from '../../../../../utils/dbConfig'
import { useState,useEffect } from 'react';
import { useParams,useRouter } from 'next/navigation'
import BudgetItem from '../../budgets/_components/BudgetItem'
import AddExpense from '../_components/AddExpense';
import ExpenseListTable from '../_components/ExpenseListTable';
import { Button } from '../../../../../components/ui/button'
import { PenBox, Trash } from 'lucide-react';
import { toast } from 'sonner'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../../../../../@/components/ui/alert-dialog';
import EditBudget from '../_components/EditBudget';

function Expensescreen({}) {
    const [budgetInfo,setBudgetInfo]=useState();
    const {user}=useUser();
    const [expenseList,setExpenseList]=useState([]);
    const params = useParams();
    const budgetId = params.id;
    const route=useRouter()
    
    useEffect(()=>{
        user&&getBudgetInfo();
    },[user]);
    /**
     * get budget info;
     */
    const getBudgetInfo=async()=>{
        const result=await db.select({
            ...getTableColumns(budgets),
            totalSpend:sql`sum(${expenses.amount})`.mapWith(Number),
            totalItem:sql`count(${expenses.id})`.mapWith(Number)
            }).from(budgets)
            .leftJoin(expenses,eq(budgets.id,expenses.budgetId))
            .where(eq(budgets.createdBy,user?.primaryEmailAddress?.emailAddress))
            .where(eq(budgets.id,params.id))
            .groupBy(budgets.id);
        setBudgetInfo(result[0]);
        getExpenseList();
        
          
        
    }
    /**
     * to get the expense list
     */
    const getExpenseList=async()=>{
        const result=await db.select().from(expenses)
        .where(eq(expenses.budgetId,params.id))
        .orderBy(desc(expenses.id));
        setExpenseList(result);
        console.log(result);

    }
    /**
     * used to delete the budget
     */
    const deleteBudget=async()=>{
      const deleteExpenseResult=await db.delete(expenses)
      .where(eq(expenses.budgetId,params.id))
      .returning();
      if(deleteExpenseResult){
          const result=await db.delete(budgets)
          .where(eq(budgets.id,params.id))
          .returning();
      }
      toast('Budget Deleted!!');
      route.replace('/dashboard/budgets')
    }
  return (
    <div className='p-10'>
      <h2 className='text-gray-950 font-extrabold text-3xl flex justify-between items-center'>My Expenses
        <div className='flex items-center gap-2'>
            <EditBudget budgetInfo={budgetInfo} refreshData={()=>getBudgetInfo()}/>
            <AlertDialog>
            <AlertDialogTrigger asChild>
            <span><Button className="bg-red-600 p-3  cursor-pointer" ><Trash/>Delete</Button>
            </span>
            </AlertDialogTrigger>
            <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your Budget
              and remove your data.
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={()=>deleteBudget()}>Continue</AlertDialogAction>
            </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialog>
        </div>

      </h2>

      <div className='grid grid-cols-1 md:grid-cols-3 mt-6 gap-5 '>
        {budgetInfo ? (
          <BudgetItem budget={budgetInfo} />
        ) : (
          <div className='h-[150px] w-full bg-slate-200 rounded-lg animate-pulse'></div>
        )}
        <AddExpense budgetId={params.id}
        user={user}
        refreshData={()=>getBudgetInfo()}
        />
      </div>
      <div className='mt-4 '>
        <h2 className='text-2xl font-bold'>Latest Expenses</h2>
        <ExpenseListTable expenseList={expenseList}
        refreshData={getBudgetInfo}/>
      </div>
      
    </div>
  )
}

export default Expensescreen
