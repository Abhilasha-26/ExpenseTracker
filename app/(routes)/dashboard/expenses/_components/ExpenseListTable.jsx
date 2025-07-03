import { Trash } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'
import { db } from '../../../../../utils/dbConfig'
import { eq } from 'drizzle-orm'
import { expenses } from '../../../../../utils/schema'

function ExpenseListTable({ expenseList, refreshData }) {
  
  const deleteExpense = async (expense) => {
    const result = await db.delete(expenses)
      .where(eq(expenses.id, expense.id))
      .returning();

    if (result) {
      toast('Expense Deleted!!')
      refreshData(); // <-- very important to refresh after deletion
    }
  }

  return (
    <div className='mt-3'>
      <div className='grid grid-cols-4 bg-green-500 p-2 rounded-md font-bold'>
        <h2 className='font-bold'>Name</h2>
        <h2 className='font-bold'>Amount</h2>
        <h2 className='font-bold'>Date</h2>
        <h2 className='font-bold'>Action</h2>
      </div>

      {expenseList?.length > 0 ? (
        expenseList.map((expense, index) => (
          <div key={expense.id} className='grid grid-cols-4 bg-green-100 p-2 rounded-md mt-2'>
            <h2>{expense.name}</h2>
            <h2>₹{expense.amount}</h2>
            <h2>{new Date(expense.createdAt).toLocaleDateString('en-GB')}</h2>
            <h2>
              <Trash
                className='text-red-600 cursor-pointer'
                onClick={() => deleteExpense(expense)}
              />
            </h2>
          </div>
        ))
      ) : (
        <div className='mt-3 text-center text-gray-500'>No expenses found.</div>
      )}
    </div>
  )
}

export default ExpenseListTable
