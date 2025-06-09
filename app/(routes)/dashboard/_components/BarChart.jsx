import React from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function BarChartDashBoard({ budgetList }) {
  if (!budgetList || budgetList.length === 0) {
    return <p className="text-center text-gray-500">No data to display</p>;
  }

  return (
    <div className="overflow-x-auto border rounded-lg p-5">
        <h2 className='font-bold text-lg'>Activity</h2>
        <ResponsiveContainer width={'80%'} height={300}>
          <BarChart
        data={budgetList}
        margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
      >
        <XAxis dataKey='name'/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalSpend" stackId="a" fill="#80de70" />
        <Bar dataKey="amount" stackId="a" fill="#006a4e " />
      </BarChart>        
        </ResponsiveContainer>

    </div>
  );
}

export default BarChartDashBoard;
