import btnClose from '../img/cerrar.svg'
export const Modal = ({ setModal, animateModal, setAnimateModal }) => {

    const hiddenModal = () => {
        setAnimateModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500);
    }
    return (
        <div className="modal">
            <div className="cerrar-modal">
                <img src={btnClose} alt="cerrar modal"
                    onClick={hiddenModal} />
            </div>
            <form action="" className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}>
                <legend>NEW EXPENSE</legend>
                <div className="campo">
                    <label htmlFor="name">Name Expense</label>
                    <input type="text"
                    id='name'
                    placeholder='Expense name'
                    />
                </div>
                <div className="campo">
                    <label htmlFor="amount">Amount</label>
                    <input type="number"
                    id='amount'
                    placeholder='Add Amount ej. 300'
                    />
                </div>

                <div className="campo">
                    <label htmlFor="category">Category</label>
                  <select id="category">
                    <option value="">-- Select </option>
                    <option value="saving">Saving</option>
                    <option value="food">Food</option>
                    <option value="subscriptions">Subscriptions</option>
                    <option value="leisure">Leisure</option>
                  </select>
                </div>
                    <input type="submit" value='Add' />
            </form>
        </div>
    )
}
