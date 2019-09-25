import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div id="Form">
        <h3>Add a new item to the table:</h3>
        <form onSubmit={this.props.handleFormSubmit}>
          <label>
            Description:
            <input
              type="text"
              required
              name="description"
              value={this.props.description}
              onChange={this.props.handleInputChange}
            />
          </label>

          <label>
            Amount:
            <input
              type="number"
              required
              min="0"
              step="any"
              name="amount"
              value={this.props.amount}
              onChange={this.props.handleInputChange}
            />
          </label>

          <label>
            Currency:
            <select
              name="currency"
              value={this.props.currency}
              onChange={this.props.handleInputChange}
            >
              {this.props.currencies.map(currency => (
                <option value={currency}>{currency}</option>
              ))}
            </select>
          </label>

          <button type="submit" value="Submit">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
