import React, { useState, useEffect } from "react";

export const NewEntry = () => {
  // Initialized with empty strings so placeholders render nicely without warning logs
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
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

    

  const handleSubmit = () => {
        if(!amount) return alert("please enter amount");
        if(!category) return alert("please select Category");
        if(!name) return alert("please enter name of the treansaction");

    const entry = {
      amount: parseFloat(amount),
      categoryId: category,
      name: name,
      TransactionDateTime: new Date().toISOString()
    };

    fetch("http://10.115.53.29:5154/api/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entry),
  })
  .then((res)=>{
    if(!res.ok){
       throw new Error("some error occured");
        console.log("some error occured")
    }
    return res.json();
  })
  .then((data)=>{
    console.log(data);
    
    setAmount("");
    setCategory("");
    setName("");
  })
  .catch((error) => {
      console.error("Error creating transaction:", error);
      alert("Error sending transaction to the database.");
    });

    console.log("Submitted Entry: ", entry);

    // Optional: Reset form fields back to blank after saving
  };

  // Fixed: Accepts the id and passes it down to state
  const handleCategory = (id) => {
    setCategory(id);
  };

  return (
    <div className="bg-slate-100 flex flex-col justify-center items-center min-h-screen p-4">
      <p className="pt-8 text-gray-500 font-medium">Amount</p>
      <div className="mb-2 p-4 flex flex-row justify-center items-center gap-1.5 hover:bg-slate-200 rounded-2xl text-2xl font-bold">
        <span className="text-gray-600">$</span>
        <input
          className="border-b-2 border-slate-300 outline-none bg-transparent hover:bg-slate-200 w-32 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          type="number"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="bg-slate-200 p-4 rounded-2xl w-full sm:max-w-2xl shadow-sm">
        <span className="font-bold text-gray-800 block mb-2">Select Category</span>

        <div className="grid grid-cols-4 gap-2 pt-2 pb-4">
          {categories.map((item) => {
            const isSelected = category === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleCategory(item.id)}
                // Added a quick conditional ring style to visually show what's selected!
                className={`flex flex-col items-center gap-1 rounded-2xl p-3 bg-slate-300 transition-all hover:bg-slate-400 ${
                  isSelected ? "ring-2 ring-amber-500 bg-amber-50" : ""
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-xs text-gray-700 font-semibold">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>

        <div className="space-y-1">
          <div className="font-bold text-gray-800">Name</div>
          <input
            type="text"
            className="w-full h-12 bg-slate-300 rounded-2xl p-3 outline-none hover:bg-slate-400 text-gray-700 font-semibold"
            placeholder="Add Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button 
          onClick={handleSubmit}
          className="w-full h-12 mt-4 bg-slate-950 rounded-2xl text-gray-100 font-semibold hover:bg-slate-800 transition-colors"
        >
          Complete Entry
        </button>
      </div>
    </div>
  );
};