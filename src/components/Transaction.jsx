import React from 'react'

export const Transaction = ({item}) => {
  return (
     <div
              key={item.id}
              className="flex w-full justify-between hover:bg-slate-200 items-center p-2 border-b border-gray-300 rounded-2xl "
            >
              <div className=" flex items-center w-3/6">
                <span className=" rounded-full p-3 mx-2 bg-slate-300">Tra</span>
                <div>
                  <p className="font-bold text-slate-700 text-sm">
                    {item.name}
                  </p>
                  <p className=" text-xs text-gray-400 capitalize font-medium ">
                    {item.categoryName}
                  </p>
                </div>
              </div>
              <div className="font-medium text-gray-500 text-xs">
                {item.transactionDateTime}
              </div>
              <div className="font-medium text-gray-700 text-sm">
                {item.amount}
              </div>
            </div>
  )
}
