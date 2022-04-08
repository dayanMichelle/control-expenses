import React from 'react'
import { NewBudget } from './newBudget'

export const Header = ({setBudget,budget}) => {
  return (
    <header>
        <h1>Expense Planner</h1>
        <NewBudget 
        budget={budget}
        setBudget={setBudget}
        />
    </header>
  )
}
