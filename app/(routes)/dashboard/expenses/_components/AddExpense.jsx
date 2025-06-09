import React from 'react';
import { Input } from '../../../../../@/components/ui/input';
import { useState } from 'react'; 
import { Button } from '../../../../../components/ui/button';
import { db } from '../../../../../utils/dbConfig';
import { toast } from 'sonner';
import { expenses } from '../../../../../utils/schema';
import { budgets } from '../../../../../utils/schema';
import { Loader } from 'lucide-react';
function AddExpense({budgetId,user,refreshData}) {
    const [name,setName]=useState();
    const [amount,setAmount]=useState();
    const [loading ,setLoading]=useState(false);

    /**
     * used to add expenses
     */
    const addNewExpense=async()=>{
        setLoading(true)
        if(!name || !amount) return;
        const result=await db.insert(expenses).values({
            name:name,
            amount:Number(amount),
            budgetId:budgetId,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:new Date()
        }).returning({insertedId:budgets.id});
        
        setAmount('');
        setName('');
        if(result){
            refreshData();
            toast("New Expense Added!!")
        }
        setLoading(false);
    }
  return (
    <div className='border p-5 rounded-lg shadow-md hover:shadow-slate-300'>

        <h2 className='font-bold text-xl'>Add Expense</h2>
        <div className='mt-2'>
            <h2 className='text-black font-medium my-1'>Expense Name</h2>
            <Input
                placeholder="e.g Pen...."
                value={name ?? ''}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className='mt-2'>
            <h2 className='text-black font-medium my-1'>Expense Amount</h2>
            <Input
                placeholder="e.g.Rs.20.."
                value={amount ?? ''}
                onChange={(e) => setAmount(e.target.value)}
            />
        </div>
        <Button disabled={!(name&&amount) || loading}
        onClick={()=>addNewExpense()}
        className="mt-3 w-full text-shadow-white bg-gray-900">{loading? <Loader className="animate-spin"/>:" Add New Expense"}</Button>      
      
    </div>
  )
}

export default AddExpense
