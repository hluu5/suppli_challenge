import React from 'react';
import './agile-board.scss';

const AgileBoard = ({ authenticationIssues, paymentIssues }) => {
  const openAuthenticationEpics = authenticationIssues?.filter((epic)=>{
    return !epic.closed_at;
  })

  const openPaymentIssues = paymentIssues?.filter((epic)=>{
    return !epic.closed_at;
  })

  return (
    <table className="agile-board-table">
      <tr>
        <th>Epic</th>
        <th>Open</th>
        <th>Total</th>
      </tr>
      <tr>
        <td>authentication</td>
        <td>{openAuthenticationEpics.length}</td>
        <td>{authenticationIssues.length}</td>
      </tr>
      <tr>
        <td>payments</td>
        <td>{openPaymentIssues.length}</td>
        <td>{paymentIssues.length}</td>
      </tr>
    </table>
  )
}

export default AgileBoard;