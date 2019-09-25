import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class ExpenseForm extends Component {
  render() {
    return (
      <Card id="card">
        <h4 align="center">Add a new expense:</h4>
        <form onSubmit={this.props.handleFormSubmit}>
          <label>Description: </label>
          <input
            type="text"
            required
            name="description"
            value={this.props.description}
            onChange={this.props.handleInputChange}
          />

          <label>Amount: </label>

          <input
            type="number"
            required
            min="0"
            step="any"
            name="amount"
            value={this.props.amount}
            onChange={this.props.handleInputChange}
          />

          <label>Currency: </label>

          <select
            name="currency"
            value={this.props.currency}
            onChange={this.props.handleInputChange}
          >
            {this.props.currencies.map(currency => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>

          <Button
            className="float-right"
            id="add"
            type="submit"
            variant="outline-secondary"
          >
            Add Expense
          </Button>
        </form>
      </Card>
    );
  }
}

export default ExpenseForm;
