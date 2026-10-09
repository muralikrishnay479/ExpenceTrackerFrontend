import { useState } from "react";
import { Link } from "react-router";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [navItems] = useState([
    { path: "/", name: "DashBoard" },
    { path: "/history", name: "History" },
    { path: "/add", name: "Add Transaction" },
    
  ]);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="relative">
  
      <div className="h-14 items-center flex justify-start gap-40  px-6 bg-slate-50 border-b border-gray-200 shadow-sm">
        <h1 className="text-violet-950 font-black text-lg tracking-tight items-center flex">
        <button
          onClick={handleToggle}
          type="button"
          className="sm:hidden text-slate-700 hover:text-amber-500 focus:outline-none p-2 rounded-lg transition-colors"
          aria-label="Toggle Menu"
        >
          {toggle ? (
          
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
          
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        <span>ExpenseTracker </span>
        </h1>

    
        <nav className="hidden sm:flex items-center gap-8 font-semibold text-slate-600">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className="hover:text-amber-500 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

       
        
      </div>


      {toggle && (
        <div className="absolute top-14 left-0 w-full bg-slate-50 border-b border-gray-200 shadow-xl z-50 sm:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col p-4 gap-3 font-semibold text-slate-700">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setToggle(false)} 
                className="p-3 rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-all text-base"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};