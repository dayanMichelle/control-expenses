import { useState,useEffect } from 'react'
import btnClose from '../img/cerrar.svg'
import { Message } from './Message'
export const Modal = ({
    setModal,
    animateModal,
    setAnimateModal,
    saveExpense,
    spentEdit
}) => {


    const [expense, setExpense] = useState({
        name: '',
        amount: 0,
        category: '',
    })

    const [message, setMessage] = useState('')

    useEffect(() => {
        if(Object.keys(spentEdit).length > 0){
            setExpense(spentEdit)
        }
    }),[]

    const hiddenModal = () => {
        setAnimateModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (expense.name.trim() === '' || expense.amount === 0 || expense.category === '') {
            setMessage('Todos los campos son obligatorios')
            setTimeout(() => {
                setMessage('')
            }, 3000);
            return
        }
        saveExpense(expense)
        hiddenModal()
    }
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={btnClose} alt="cerrar modal"
                    onClick={hiddenModal} />
            </div>
            <form action="" onSubmit={handleSubmit}
                className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}>
                <legend>NEW EXPENSE</legend>
                {message && <Message type='error'>{message}</Message>}
                <div className="campo">
                    <label htmlFor="name">Name Expense</label>
                    <input type="text"
                        id='name'
                        placeholder='Expense name'
                        value={expense.name}
                        onChange={e => setExpense({ ...expense, name: e.target.value })}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="amount">Amount</label>
                    <input type="number"
                        id='amount'
                        name='amount'
                        value={expense.amount}
                        placeholder='Add Amount ej. 300'
                        onChange={e => setExpense({ ...expense, amount: Number(e.target.value) })}
                    />
                </div>

                <div className="campo">
                    <label htmlFor="category">Category</label>
                    <select id="category"
                        value={expense.category}
                        onChange={e => setExpense({ ...expense, category: e.target.value })}
                    >
                        <option value="">-- Select </option>
                        <option value="saving">Saving</option>
                        <option value="home">Home</option>
                        <option value="food">Food</option>
                        <option value="expense">Expense</option>
                        <option value="leisure">Leisure</option>
                        <option value="health">Health</option>
                        <option value="subscriptions">Subscriptions</option>
                    </select>
                </div>
                <input type="submit" value='Add' />
            </form>
        </div>
    )
}
