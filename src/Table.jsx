import React, { Component } from "react";

class Table extends Component {
  render() {
    const receipts = this.props.receipts;
    let sum = 0;

    receipts.forEach(receipt => {
      receipt.canadian = parseInt(
        (receipt.amount / receipt.currency).toFixed(2)
      );

      sum += receipt.canadian;
    });

    const isEnabled = sum < 1000;

    return (
      <div>
        {receipts.length > 5 && <p> You have a limit of 5 receipts!</p>}
        <table>
          <tbody>
            <tr>
              <th>Description</th>
              <th>Amount</th>
            </tr>

            {receipts.slice(0, 5).map(receipt => {
              return (
                <div>
                  <tr>
                    <td>{receipt.description}</td>
                    <td>{receipt.canadian}</td>
                  </tr>
                  <tr></tr>
                </div>
              );
            })}
          </tbody>
        </table>
        {sum}

        {!isEnabled && <p> The expense report limit has been exceeded</p>}
        <button disabled={!isEnabled} onClick={this.onSubmit}>
          Submit
        </button>
      </div>
    );
  }

  onSubmit = () => {
    console.log(this.props.receipts);
  };
}

export default Table;
