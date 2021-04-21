import React from 'react'
import styles from './TransactionHistory.module.css'

let TransactionHistory = ({items}) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
      </thead>
      <tbody>
      {items.map(item => {
        return (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        );
      })}
      </tbody>
    </table>
  )
}

export default TransactionHistory