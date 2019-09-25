import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

class ExpenseTable extends Component {
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount in CAD</th>
            </tr>
          </thead>

          <tbody>
            {receipts.slice(0, 5).map((receipt, i) => {
              return (
                <tr key={i}>
                  <td>{receipt.description}</td>
                  <td>${receipt.canadian}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <p>
          <b>Total: </b> {sum}
        </p>
        {!isEnabled && <p> The expense report limit has been exceeded</p>}

        <Button
          id="submit"
          className="justify-content-md-center"
          disabled={!isEnabled}
          onClick={this.onSubmit}
          variant="outline-secondary"
        >
          Submit Report
        </Button>
      </div>
    );
  }

  onSubmit = () => {
    console.log(this.props.receipts.slice(0, 5));
  };
}

export default ExpenseTable;
