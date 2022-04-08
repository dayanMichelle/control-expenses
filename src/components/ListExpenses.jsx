import React from 'react'
import { Expense } from './Expense'

export const ListExpenses = ({expenses}) => {
  return (
    <div className='listado-gastos contenedor'>
       <h2>{expenses.lenght ? 'Expenses' : 'There are no expenses'}</h2>
       {expenses.map(expense => (
           <Expense
            key={expense.id}
            expense={expense}
            ></Expense>
       ))}
    </div>
  )
}