"use client"
import React, { useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../../@/components/ui/dialog"
import EmojiPicker from 'emoji-picker-react'
import { Button } from '../../../../../components/ui/button'
import { Input } from '../../../../../@/components/ui/input'
import { db } from '../../../../../utils/dbConfig'
import { useUser } from '@clerk/nextjs'
import { budgets } from '../../../../../utils/schema';
import { toast } from 'sonner'

function CreateBudget({ refreshData }) {
  const [emojiIcon, setEmojiIcon] = useState('😊');
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const { user } = useUser();
  const [dialogOpen, setDialogOpen] = useState(false);

  const onCreateBudget = async () => {
    if (!name.trim() || !amount || Number(amount) <= 0) {
      toast.error("Please enter valid name and amount");
      return;
    }
    try {
      const result = await db.insert(budgets)
        .values({
          name: name.trim(),
          amount: Number(amount),
          createdBy: user?.primaryEmailAddress?.emailAddress,
          icon: emojiIcon
        })
        .returning({ insertedId: budgets.id });

      if (result) {
        toast('New Budget Created!');
        refreshData();
        setDialogOpen(false);  // close dialog after success
        setName('');
        setAmount('');
        setEmojiIcon('😊');
      }
    } catch (error) {
      toast.error('Failed to create budget.');
      console.error(error);
    }
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <div className='bg-slate-100 p-10 rounded-md items-center flex flex-col border-2 border-dashed cursor-pointer hover:shadow-md'>
          <h2 className='text-3xl'>+</h2>
          <h2>Create new Budget</h2>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new Budget</DialogTitle>
          <DialogDescription>
            <>
              <Button variant="outline" size="lg" onClick={() => setOpenEmojiPicker(!openEmojiPicker)}>
                {emojiIcon}
              </Button>
              <div className='absolute z-20'>
                {openEmojiPicker && (
                  <EmojiPicker
                    onEmojiClick={(e) => {
                      setEmojiIcon(e.emoji);
                      setOpenEmojiPicker(false);
                    }}
                  />
                )}
              </div>
              <div className='mt-2'>
                <h2 className='text-black font-medium my-1'>Budget Name</h2>
                <Input
                  placeholder="e.g. Stationery.."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='mt-2'>
                <h2 className='text-black font-medium my-1'>Budget Amount</h2>
                <Input
                  type="number"
                  placeholder="e.g. Rs 1000/-.."
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <Button
            disabled={!(name.trim() && amount && Number(amount) > 0)}
            onClick={onCreateBudget}
            className="mt-5 w-full"
          >
            Create Budget
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CreateBudget;
