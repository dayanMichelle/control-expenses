import React from 'react'
import { Expense } from './Expense'

export const ListExpenses = ({expenses,setSpent}) => {
  return (
    <div className='listado-gastos contenedor'>
       <h2>{Object.keys(expenses).length > 0? 'Expenses' : 'There are no expenses'}</h2>
       {expenses.map(expense => (
           <Expense
           setSpent={setSpent}
            key={expense.id}
            expense={expense}
            ></Expense>
       ))}
    </div>
  )
}