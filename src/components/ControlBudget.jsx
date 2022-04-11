import { useEffect,useState } from "react"

export const ControlBudget = ({budget,expenses}) => {
    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)
    useEffect(() => {
     
        const totalSpent = expenses.reduce((total,expense) =>  expense.amount + total,0)

        const totalAvailable = budget - totalSpent
        setAvailable(totalAvailable)
        setSpent(totalSpent)
    },[expenses])
    

    const formatBudget = (cant)=>{
       return cant.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div>
            <p>Gráfica aquí </p>
        </div>
        <div className='contenido-presupuesto'>
            <p>
                <span>Presupuesto:</span>  {formatBudget(budget)}
            </p>
            <p>
                <span>Presupuesto:</span>  {formatBudget(available)}
            </p>
            <p>
                <span>Presupuesto:</span>  {formatBudget(spent)}
            </p>
            
        </div>
    </div>
  )
}
