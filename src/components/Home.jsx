import { useState, useMemo, useEffect } from "react"
import { CategorySpendings } from "./CategorySpendings"
import { MothlySummary } from "./MothlySummary"
import { TotalAmount } from "./TotalAmount"
import { TransactionHistory } from "./TransactionHistory"
import {api} from "./api"

export const Home=()=>{

   const [transactions, setTransactions] = useState([
  {
    "id": "edff3de5-5300-4ede-c0fd-08ded151fb75",
    "amount": 250.75,
    "transactionDateTime": "2026-05-23T10:30:00",
    "name": "Lunch at Restaurant",
    "categoryId": "09438173-9446-4891-de04-08ded151edce",
    "categoryName": "Food"
  },
  {
    "id": "b15b9f0b-9ebd-46d3-834c-08ded153cf5e",
    "amount": 250.75,
    "transactionDateTime": "2026-06-23T10:30:00",
    "name": "Lunch at Restaurant",
    "categoryId": "eade7216-d0a1-4fe1-90fa-08ded153be15",
    "categoryName": "Food"
  },
  {
    "id": "7571663e-7208-4667-834d-08ded153cf5e",
    "amount": -250.75,
    "transactionDateTime": "2026-06-23T10:30:00",
    "name": "Lunch at Restaurant",
    "categoryId": "eade7216-d0a1-4fe1-90fa-08ded153be15",
    "categoryName": "Icome"
  },
  {
    "id": "b4d35a3e-9a44-437b-975f-08ded19a9d48",
    "amount": 50,
    "transactionDateTime": "2026-06-24T02:45:11.685",
    "name": "Tiffien",
    "categoryId": "09438173-9446-4891-de04-08ded151edce",
    "categoryName": "Food"
  }
]);



const now = new Date();
const monthlyTransactions = useMemo(() => {
  return transactions.filter((item) => {
    if (!item.transactionDateTime) return false;

    const txDate = new Date(item.transactionDateTime);

    return (
      txDate.getMonth() === now.getMonth() &&
      txDate.getFullYear() === now.getFullYear()
    );
  });
}, [transactions]);

const summary = useMemo(() => {
  return monthlyTransactions.reduce(
    (summary, transaction) => {
      if (transaction.amount >= 0) {
        summary.income += transaction.amount;
        const existingCategory = summary.category.find(
          (item) => item.categoryName === transaction.categoryName
        );
  
        if (existingCategory) {
          existingCategory.total += Math.abs(transaction.amount);
        } else {
          summary.category.push({
            categoryName: transaction.categoryName,
            total: Math.abs(transaction.amount),
          });
        }
      } else {
        summary.expense += transaction.amount;
      }


      return summary;
    },
    {
      income: 0,
      expense: 0,
      category: [],
    }
  );
}, [monthlyTransactions]);


console.log(summary)



    return <div className="grid grid-flow-row-dense grid-cols-1 p-4 sm:grid-cols-3 gap-2">
        
        <div className="col-span-1 sm:col-span-2">

        <TotalAmount total={summary.income+summary.expense} />
        
         <MothlySummary income={summary.income} expense={summary.expense} />
        </div>

        <div>
            <CategorySpendings categorySum={summary.category} />
        </div>

        <div className="col-span-1 sm:col-span-2">
            <p>recent 5</p>
        <TransactionHistory monthlyTransactions={monthlyTransactions} />
        </div>
    </div>
}