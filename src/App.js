import React, { Component } from "react";
import ExpenseForm from "./Form";
import ExpenseTable from "./Table";
import "./App.css";
import Container from "react-bootstrap/Container";

class App extends Component {
  state = {
    description: "",
    amount: "",
    receipts: [],
    currency: "CAD",
    currencies: []
  };

  componentDidMount() {
    fetch("https://api.exchangeratesapi.io/latest?base=CAD")
      .then(res => res.json())
      .then(data => {
        this.setState({ currencies: data.rates });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Container>
        <h2 align="center"> Paytm Expense Report </h2>
        <ExpenseForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          description={this.state.description}
          amount={this.state.amount}
          currency={this.state.currency}
          currencies={Object.keys(this.state.currencies)}
        />
        <ExpenseTable receipts={this.state.receipts} />
      </Container>
    );
  }

  handleFormSubmit = event => {
    event.preventDefault();

    let receipts = [...this.state.receipts];

    receipts.push({
      description: this.state.description,
      amount: this.state.amount,
      currency: this.state.currencies[this.state.currency]
    });

    this.setState({
      receipts,
      amount: "",
      description: "",
      currency: "CAD"
    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
}

export default App;
