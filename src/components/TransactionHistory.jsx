
import { useState, useEffect } from "react";
import { Transaction } from "./Transaction";

export const Filters = ()=>{
    return    <div className="flex flex-col items-start p-8 gap-3 bg-gray-100 m-1">
        <div className="block">
          <h1 className="font-medium text-2xl text-gray-600">
            Transaction History
          </h1>
        </div>
        <div className="">
          <h1>Filters</h1>
        </div>
      </div> 
}

export const TransactionHistory = ({monthlyTransactions}) => {
  // const transactions = [
  //   {
  //     id: "tx-001",
  //     name: "Grocery Run",
  //     amount: 45.2,
  //     category: "food",
  //     date: "2026-06-22",
  //   },
  //   {
  //     id: "tx-002",
  //     name: "Monthly Apartment Rent",
  //     amount: 1200.0,
  //     category: "rent",
  //     date: "2026-06-01",
  //   },
  //   {
  //     id: "tx-003",
  //     name: "Gas Fill-up",
  //     amount: 35.5,
  //     category: "transport",
  //     date: "2026-06-21",
  //   },
  //   {
  //     id: "tx-004",
  //     name: "Cinema Tickets",
  //     amount: 28.0,
  //     category: "leisure",
  //     date: "2026-06-19",
  //   },
  //   {
  //     id: "tx-005",
  //     name: "Electric Bill",
  //     amount: 84.15,
  //     category: "utilities",
  //     date: "2026-06-15",
  //   },
  //   {
  //     id: "tx-006",
  //     name: "Pharmacy Checkup",
  //     amount: 15.0,
  //     category: "health",
  //     date: "2026-06-18",
  //   },
  //   {
  //     id: "tx-007",
  //     name: "New Running Shoes",
  //     amount: 110.0,
  //     category: "shopping",
  //     date: "2026-06-12",
  //   },
  //   {
  //     id: "tx-008",
  //     name: "Coffee with Team",
  //     amount: 6.75,
  //     category: "food",
  //     date: "2026-06-22",
  //   },
  // ];

const [transactions, setTransactions] = useState([
    {
       "id": "edff3de5-5300-4ede-c0fd-08ded151fb75",
        "amount": -250.75,
        "transactionDateTime": "2026-06-23T10:30:00",
        "name": "Lunch at Restaurant",
        "categoryId": "09438173-9446-4891-de04-08ded151edce",
        "categoryName": "Food"
    }
    ]);

    useEffect(()=>{
        fetch("http://10.115.53.29:5154/api/transactions")
        .then((res)=>{
            if(!res.ok){
                 throw new Error("someth went worong");
            }
            return res.json()
        })
        .then((data)=> setTransactions(data))
        .catch((e)=>console.log(e));
    },[])

  

  return (
    <div className="max-w-2xl   flex  flex-col mx-auto bg-slate-100 rounded-2xl gap-2  border border-slate-200">
      {/* <div className="flex flex-col items-start p-8 gap-3 bg-gray-100 m-1">
        <div className="block">
          <h1 className="font-medium text-2xl text-gray-600">
            Transaction History
          </h1>
        </div>
        <div className="">
          <h1>Filters</h1>
        </div>
      </div> */}
      <div className="flex flex-col items-start p-8 bg-gray-100 m-1 gap-2">
        <div className=" flex w-full justify-between">
          <h1 className="font-normal  text-gray-600">Today</h1>
          <p>date</p>
        </div>

        {transactions.map((item) => {
          return (
              <Transaction item={item}/>
            // <div
            //   key={item.id}
            //   className="flex w-full justify-between hover:bg-slate-200 items-center p-2 border-b border-gray-300 rounded-2xl "
            // >
            //   <div className=" flex items-center w-3/6">
            //     <span className=" rounded-full p-3 mx-2 bg-slate-300">Tra</span>
            //     <div>
            //       <p className="font-bold text-slate-700 text-sm">
            //         {item.name}
            //       </p>
            //       <p className=" text-xs text-gray-400 capitalize font-medium ">
            //         {item.categoryName}
            //       </p>
            //     </div>
            //   </div>
            //   <div className="font-medium text-gray-500 text-xs">
            //     {item.transactionDateTime}
            //   </div>
            //   <div className="font-medium text-gray-700 text-sm">
            //     {item.amount}
            //   </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
};
