import React from 'react';

export const InputField = ({
  label,
  error,
  id,
  type = 'text',
  className = '',
  ...props
}) => {
  return (
    <div className="w-full flex flex-col gap-1.5 mb-4">
      {/* 1. Dynamic Label */}
      {label && (
        <label 
          htmlFor={id} 
          className="text-sm font-medium text-slate-700"
        >
          {label}
        </label>
      )}

      {/* 2. Controlled Input Field */}
      <input
        id={id}
        type={type}
        className={`
          w-full h-11 px-3 rounded-xl border text-base bg-white text-slate-900 
          placeholder:text-slate-400 transition-all focus:outline-none focus:ring-2
          ${error 
            ? 'border-red-500 focus:ring-red-200 focus:border-red-500' 
            : 'border-slate-300 focus:ring-slate-200 focus:border-slate-950'
          }
          disabled:bg-slate-50 disabled:text-slate-400 disabled:cursor-not-allowed
          ${className}
        `}
        {...props}
      />

      {/* 3. Conditional Validation Error Message */}
      {error && (
        <span className="text-xs font-medium text-red-500 tracking-wide mt-0.5">
          {error}
        </span>
      )}
    </div>
  );
};