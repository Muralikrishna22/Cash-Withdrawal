import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    userBalance: 2000,
  }

  withdrawal = withdrawBalance => {
    this.setState(prevState => ({
      userBalance: prevState.userBalance - withdrawBalance,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {userBalance} = this.state
    return (
      <div className="app-container">
        <div className="withdraw-container">
          <div className="user-profile">
            <div className="user-dp">
              <p>S</p>
            </div>
            <p className="user-name">Sarah Williams</p>
          </div>
          <div className="your-balance-container">
            <p className="your-balance">Your Balance</p>
            <div>
              <p className="user-balance">{userBalance}</p>
              <p className="your-balance"> in rupees</p>
            </div>
          </div>
          <p className="user-name">Withdraw</p>
          <p className="your-balance"> CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationDetails={eachItem}
                key={eachItem.id}
                withdrawal={this.withdrawal}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
