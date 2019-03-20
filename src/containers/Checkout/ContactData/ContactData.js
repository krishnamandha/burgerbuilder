import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.css";
import axios from "../../../axios-orders";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    let order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Krishnareddy Mandha",
        emai: "krishna@gmail.com",
        mobile: "9949666066",
        deliveryMethod: "fastest",
        address: {
          street: "Chintal",
          zipCode: "500054",
          country: "India"
        }
      }
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
    console.log(this.props.ingredients);
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          tyepe="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className={classes.Input}
          tyepe="email"
          name="email"
          placeholder="Your Mail"
        />
        <input
          className={classes.Input}
          tyepe="text"
          name="street"
          placeholder="Street"
        />
        <input
          className={classes.Input}
          tyepe="text"
          name="postal"
          placeholder="Postal Code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }

    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}
export default ContactData;
