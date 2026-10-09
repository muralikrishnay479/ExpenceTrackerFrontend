import React, {  } from 'react'

export const Button = ({varient, children, className='', ...props  }) => {
            const css = varient == 'prima' 
            ? 'w-full h-12 mt-4 bg-slate-950 rounded-2xl text-gray-100 font-semibold hover:bg-slate-800 transition-colors' 
            : 'w-full h-12 mt-4 bg-slate-300 rounded-2xl text-gray-900 font-semibold hover:bg-slate-800 hover:text-gray-100 transition-colors';
  return (
    <div className={`p-2 w-full items-center flex justify-center ${css} ${className}`}  {...props}>
        {children}
    </div>
  )
}
