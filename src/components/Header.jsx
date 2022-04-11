import React from 'react'
import { ControlBudget } from './ControlBudget.jsx'
import { NewBudget } from './newBudget'

export const Header = ({
    setBudget,
    budget,
    setIsValidBudget,
    isValidBudget,expenses
}) => {

    return (
        <header>
            <h1>Expense Planner</h1>
            {isValidBudget ? (
                <ControlBudget 
                budget={budget} 
                expenses={expenses}/>
            ) : (<NewBudget
                budget={budget}
                setBudget={setBudget}
                setIsValidBudget={setIsValidBudget}
            />
            )}

        </header>
    )
}
