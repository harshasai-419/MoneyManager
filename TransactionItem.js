import './index.css'

const TransactionItem = props => {
  const {key, id, title, amount, type, deleteItem} = props
  console.log(key)
  const goToDelete = () => {
    deleteItem(id, type, amount)
  }

  return (
    <div className="trans-item">
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{type === 'INCOME' ? 'Income' : 'Expenses'}</p>
      <button className="del-button" onClick={goToDelete} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-image"
          alt="delete"
        />
      </button>
    </div>
  )
}

export default TransactionItem
