import React, { Component } from 'react';


class Account extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0
    }
  }

  deposit = (e) => {
    const depositAmount = parseInt(document.getElementById(this.props.name).value, 10);
    const balance = parseInt(this.state.balance, 10);

    if(isNaN(depositAmount)) {

    } else {
      this.setState({
        balance: balance + depositAmount
      })
    }
  }

  withdraw = (e) => {
    const withdrawAmount = parseInt(document.getElementById(this.props.name).value, 10);
    const balance = parseInt(this.state.balance, 10);

    if(withdrawAmount > balance || isNaN(withdrawAmount)) {
    } else {
      this.setState({
        balance: balance - withdrawAmount
      })
    }
  }

  transfer = (e) => {
    const transferAmount = parseInt(document.getElementById(this.props.name).value, 10);
    let transferBalance;

    if(this.props.name === 'Checking') {
      transferBalance = parseInt(document.getElementById('Savings'), 10);
    } else {
      transferBalance = parseInt(document.getElementById('Checking'), 10);
    }

    const balance = parseInt(this.state.balance, 10);

    if(isNaN(transferAmount) || transferAmount > balance) {

    } else {
      this.setState({
        balance: this.state.balance - transferAmount
      })
    }
  }

  render() {
    const currentBalance = parseInt(this.state.balance, 10);
    let zeroBalance;
    if(currentBalance === 0) {
      zeroBalance = 'zero balance';
    } else {
      zeroBalance = 'balance';
    }

    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={zeroBalance}>${this.state.balance}</div>
        <input id={this.props.name} type="text" placeholder="enter an amount" />
        <input onClick={this.deposit} type="button" value="Deposit" />
        <input onClick={this.withdraw} type="button" value="Withdraw" />
        <input onClick={this.transfer} type="button" value="Transfer" />
      </div>
    )
  }
}

export default Account;
