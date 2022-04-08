import { useState } from 'react'
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

  const handleNewExpense = () => {
    setModal(true)
    setTimeout(() => {
      setAnimateModal(true)
    }, 500);
  }
  const saveExpense = expense => {
    expense.id = getId()
    expense.date = Date.now()
    setExpenses([...expenses, expense])

  }

  return (

    <div className={modal && 'fijar'}>
      <Header
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
      />}
    </div>
  )
}

export default App
