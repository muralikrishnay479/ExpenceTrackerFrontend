import { useState } from 'react'
// import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Layout } from './components/Layout'
import { Home } from './components/Home'
import { NewEntry } from './components/NewEntry'
import { TransactionHistory } from './components/TransactionHistory'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        index:true,
        element:<Home/>,
      },
      {
        path:"add",
        element:<NewEntry/>,
      },
      {
        path:"history",
        element:<TransactionHistory/>,
      }
    ]
  }
])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <RouterProvider router={router}/>
    </>
  )
}

export default App
