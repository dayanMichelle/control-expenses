import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
import { formateDate } from "../helpers"
import IconSaving from "../img/icono_ahorro.svg"
import IconHome from "../img/icono_casa.svg"
import IconFood from "../img/icono_comida.svg"
import IconExpense from "../img/icono_gastos.svg"
import IconLeisure from "../img/icono_ocio.svg"
import IconHealth from "../img/icono_salud.svg"
import IconSubscriptions from "../img/icono_suscripciones.svg"

const iconsDictionary = {
    saving: IconSaving,
    home: IconHome,
    food: IconFood,
    expense: IconExpense,
    leisure: IconLeisure,
    health: IconHealth,
    subscriptions: IconSubscriptions
}

export const Expense = ({ expense,setSpent }) => {

    const { category, name, id, amount, date } = expense
    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setSpent(expense)}>
            Edit
            </SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => console.log('trailing action 1')}>
                Delite
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className='gasto sombra'>
                    <div className="contenido-gasto">
                        <img src={iconsDictionary[category]} alt={category}
                        />
                        <div className="descripcion-gasto">
                            <p className="categoria"> {category} </p>
                            <p className="nombre-gasto">{name}</p>
                            <p className="fecha-gasto">
                                Agregado el: {''}
                                <span>{formateDate(date)}</span>
                            </p>
                        </div>

                    </div>
                    <p className="cantidad-gasto">$ {amount}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}
