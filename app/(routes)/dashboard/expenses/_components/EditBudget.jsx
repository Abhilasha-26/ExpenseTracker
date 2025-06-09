'use client'
import React, { useEffect, useState } from 'react';
import { Button } from '../../../../../components/ui/button';
import { PenBox } from 'lucide-react';
import { eq } from 'drizzle-orm';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../../../../@/components/ui/dialog';
import { Input } from '../../../../../@/components/ui/input';
import { useUser } from '@clerk/nextjs';

// ✅ Add this import if you have emoji-picker-react installed
import EmojiPicker from 'emoji-picker-react'; // make sure this package is installed
import { db } from '../../../../../utils/dbConfig';
import { budgets } from '../../../../../utils/schema';
import { toast } from 'sonner';

function EditBudget({ budgetInfo,refreshData }) {
  const { user } = useUser();
  const [emojiIcon, setEmojiIcon] = useState('😊');
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    if (budgetInfo) {
      setName(budgetInfo.name || '');
      setAmount(budgetInfo.amount || '');
      setEmojiIcon(budgetInfo.emoji || '😊');
    }
  }, [budgetInfo]);

  const onUpdateBudget = async()=>{
    const result=await db.update(budgets).set({
        name:name,
        amount:amount,
        icon:emojiIcon
    }).where(eq(budgets.id,budgetInfo.id))
    
    if(result){
        refreshData()
        toast('Budget Updated!!')
    }
    
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button className="hover:bg-blue-950 cursor-pointer flex gap-2">
          <PenBox /> Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Budget</DialogTitle>
          <DialogDescription asChild>
            <div className="space-y-4 mt-2 relative">
              <div className="flex items-center gap-3">
                <Button variant="outline" size="lg" onClick={() => setOpenEmojiPicker(!openEmojiPicker)}>
                  {emojiIcon}
                </Button>
                {openEmojiPicker && (
                  <div className="absolute z-20 top-full">
                    <EmojiPicker
                      onEmojiClick={(e) => {
                        setEmojiIcon(e.emoji);
                        setOpenEmojiPicker(false);
                      }}
                      height={350}
                      width={300}
                    />
                  </div>
                )}
              </div>
              <div>
                <h2 className="text-black font-medium mb-1">Budget Name</h2>
                <Input
                  placeholder="e.g. Stationery..."
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <h2 className="text-black font-medium mb-1">Budget Amount</h2>
                <Input
                  type="number"
                  placeholder="e.g. Rs 1000/-"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <Button
            className="mt-5 w-full"
            disabled={!(name.trim() && amount && Number(amount) > 0)}
            onClick={onUpdateBudget}
          >
            Update Budget
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditBudget;
