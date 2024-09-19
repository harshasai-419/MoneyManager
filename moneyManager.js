import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId, // Default to 'INCOME'
    appList: [],
    balance: 0,
    income: 0,
    expenses: 0,
  }

  addToForm = event => {
    event.preventDefault()
    const {title, amount, type, balance, income, expenses} = this.state
    const newAmount = parseInt(amount)

    if (title !== '' && amount !== '') {
      let updatedBalance = balance
      let updatedIncome = income
      let updatedExpenses = expenses

      if (type === 'INCOME') {
        updatedBalance += newAmount
        updatedIncome += newAmount
      } else {
        updatedBalance -= newAmount
        updatedExpenses += newAmount
      }

      const newTransaction = {
        id: uuidv4(),
        title,
        amount: newAmount,
        type,
      }

      this.setState(prevState => ({
        appList: [...prevState.appList, newTransaction],
        title: '',
        amount: '',
        type: transactionTypeOptions[0].optionId,
        balance: updatedBalance,
        income: updatedIncome,
        expenses: updatedExpenses,
      }))
    }
  }

  getTitle = event => {
    this.setState({title: event.target.value})
  }

  getAmount = event => {
    this.setState({amount: event.target.value})
  }

  getType = event => {
    this.setState({type: event.target.value})
  }

  deleteItem = (id, transactionType, amount) => {
    const {balance, income, expenses} = this.state
    const newAmount = parseInt(amount)
    let updatedBalance = balance
    let updatedIncome = income
    let updatedExpenses = expenses

    if (transactionType === 'INCOME') {
      updatedBalance -= newAmount
      updatedIncome -= newAmount
    } else {
      updatedBalance += newAmount
      updatedExpenses -= newAmount
    }

    this.setState(prevState => ({
      appList: prevState.appList.filter(each => each.id !== id),
      balance: updatedBalance,
      income: updatedIncome,
      expenses: updatedExpenses,
    }))
  }

  render() {
    const {title, amount, type, appList, balance, income, expenses} = this.state
    return (
      <div className="total-con">
        <div className="user-card">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your <span className="span-ele">Money Manager</span>
          </p>
        </div>

        <div>
          <MoneyDetails balance={balance} income={income} expenses={expenses} />
        </div>

        <div className="bottom-con">
          <form className="form-con" onSubmit={this.addToForm}>
            <h2>Add Transaction</h2>
            <label htmlFor="title">TITLE</label>
            <br />
            <input
              type="text"
              id="title"
              placeholder="TITLE"
              className="input-ele"
              onChange={this.getTitle}
              value={title}
            />
            <br />
            <label htmlFor="amount">AMOUNT</label>
            <br />
            <input
              id="amount"
              className="input-ele"
              type="text"
              placeholder="AMOUNT"
              onChange={this.getAmount}
              value={amount}
            />
            <br />
            <label htmlFor="type">TYPE</label>
            <br />
            <select
              id="type"
              className="input-ele"
              onChange={this.getType}
              value={type}
            >
              {transactionTypeOptions.map(option => (
                <option key={option.optionId} value={option.optionId}>
                  {option.displayText}
                </option>
              ))}
            </select>
            <br />
            <button className="button" type="submit">
              Add
            </button>
          </form>

          <div className="history-con">
            <h1>History</h1>
            <div className="history-element">
              <div className="history-ele">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </div>
            </div>
            <div>
              {appList.map(each => (
                <TransactionItem
                  key={each.id}
                  id={each.id}
                  title={each.title}
                  amount={each.amount}
                  type={each.type}
                  deleteItem={this.deleteItem}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
