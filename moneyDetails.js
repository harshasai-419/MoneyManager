import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="card-con">
      <div className="card1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="money-images"
          alt="balance"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {balance}</p>
        </div>
      </div>

      <div className="card2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="money-images"
          alt="income"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {income}</p>
        </div>
      </div>

      <div className="card3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="money-images"
          alt="expenses"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
