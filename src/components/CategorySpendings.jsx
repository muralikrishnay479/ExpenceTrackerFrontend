import { useState, useEffect } from "react";
export const CategorySpendings = ({categorySum}) => {
    const [ categories, setCategories] = useState([{
        id:'',
        name:''
      }]);

       useEffect(()=>{
      fetch("http://10.115.53.29:5154/api/catogory")
        .then(response => response.json())
        .then(data => {
          setCategories(data)});
        },[])

  return (
    <div className="bg-slate-100 pr-15 pl-4 py-5 rounded-2xl gap-2 flex flex-col border border-slate-200">
         <div className="grid grid-cols-2 gap-2 pt-2 pb-4">
          {categorySum.map((item) => {
           
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleCategory(item.id)}
                // Added a quick conditional ring style to visually show what's selected!
                className={`flex flex-col items-center gap-1 rounded-2xl p-3 bg-slate-300 transition-all hover:bg-slate-400 `}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-xs text-gray-700 font-semibold">
                  {item.categoryName}
                </span>
                <span>${item.total}</span>
              </button>
            );
          })}
        </div>
    </div>
  )
}
