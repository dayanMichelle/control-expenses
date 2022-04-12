import { useState,useEffect } from 'react'
import { Header } from './components/Header'
import { ListExpenses } from './components/ListExpenses'
import { Modal } from './components/Modal'
import { getId } from './helpers'
import IconNewExpenses from './img/nuevo-gasto.svg'

function App() {
  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [expenses, setExpenses] = useState([])
  const [spentEdit, setSpent] = useState({})

  useEffect(() => {
    if(Object.keys(spentEdit).length > 0){
      setModal(true)
      setTimeout(() => {
        setAnimateModal(true)
      }, 500);
    }
  },[spentEdit])

  const handleNewExpense = () => {
    setModal(true)
    setSpent({})
    setTimeout(() => {
      setAnimateModal(true)
    }, 500);
  }
  const saveExpense = expense => {
    console.log(expense)

    expense.id = getId()
    expense.date = Date.now()
    setExpenses([...expenses, expense])

  }

  return (

    <div className={modal ? 'fijar' : ''}>
      <Header
      expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        setIsValidBudget={setIsValidBudget}
        isValidBudget={isValidBudget}
      />
      {isValidBudget && (
        <>
        <main>
          <ListExpenses 
          expenses={expenses}
          setSpent={setSpent}
          />
        </main>
          <div className='nuevo-gasto'>
            <img
              src={IconNewExpenses}
              alt='Nuevo Gasto'
              onClick={handleNewExpense} />
          </div>
        </>

      )}
      {modal && <Modal
        setModal={setModal}
        animateModal={animateModal}
        setAnimateModal={setAnimateModal}
        saveExpense={saveExpense}
        spentEdit={spentEdit}
      />}
    </div>
  )
}

export default App
