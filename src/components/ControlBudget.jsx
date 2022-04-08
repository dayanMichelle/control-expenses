
export const ControlBudget = ({budget}) => {

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
                <span>Presupuesto:</span>  {formatBudget(budget)}
            </p>
            <p>
                <span>Presupuesto:</span>  {formatBudget(budget)}
            </p>
            
        </div>
    </div>
  )
}
