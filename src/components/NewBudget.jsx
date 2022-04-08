import { useState } from 'react'
import { Message } from './Message'

export const NewBudget = ({ 
    setBudget, 
    budget ,
    setIsValidBudget,
}) => {
    const  [message, setMessage] = useState('')

    const handleBudget = (e) => {
        e.preventDefault()
        if (!Number(budget)|| Number(budget) < 0) {
            setMessage('No es un presupuesto válido')
            return
        } 
        setMessage('')
        setIsValidBudget(true)
    }
    return (
        <div className='contenedor-presupuesto sombra contenedor'>
            <form onSubmit={handleBudget} className='formulario'>
                <div className='campo'>
                    <label htmlFor="">Define your budget</label>
                    <input type="text"
                        className='nuevo-presupuesto'
                        placeholder='Add your budget'
                        value={budget}
                        onChange={e => setBudget(Number(e.target.value))}
                    />
                </div>
                <input type="submit" value='Add' />
                {message && <Message type='error'> {message} </Message>}
            </form>
        </div>
    )
}