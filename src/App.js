import React, { useState, useEffect } from "react";
import { BrowserRouter as Router,
  Route, Switch } from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header'
import Home from './routes/Home'
import Pizza from './routes/Pizza'
import Order from './components/Order'

import schema from './validation/formSchema'
import * as Yup from 'yup'
import './App.css'

const initialFormValues = {
  name: '',
  size: '',
  //toppings
  pepperoni: false,
  sausage: false,
  mushroom: false,
  olive: false,
  greenPepper: false,
  bacon: false,
  chicken: false,
  anchovy: false,
  //Quantity
  quantity: 1,
  //special instructions
  instructions: '',
}

const initialErrors = {
  name: "",
  size: ""
}

const toppingsList = ['pepperoni', 'sausage', 'mushroom',
  'olive', 'greenPepper', 'bacon', 'chicken', 'anchovy']

  //for price calculation
const sizePrices = {
  S: {price: 10, toppingPrice: 1}, 
  M: {price: 11, toppingPrice: 1}, 
  L: {price: 12, toppingPrice: 2}, 
  XL: {price: 14, toppingPrice: 2}
}

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialErrors);
  const [order, setOrder] = useState([])
  const [submitDisabled, setSubmitDisabled] = useState(true)
  const [price, setPrice] = useState(0.0)

  //post order
  const postOrder = (orderItem) => {
    axios.post('https://reqres.in/api/users', orderItem)
      .then(res => {
        setOrder([...order, res.data])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        console.log("Error posting order", err)
      })
  }

  //update values
  const updateValues = (name, value) => {
    Yup.reach(schema, name)
      .validate(value)
      .then(valid => {
        setFormErrors({
          ...formErrors, [name]: ''
        })
      })
      .catch(err => {
        setFormErrors({
          ...formErrors, [name]: err.errors[0]
        })
      })
  

    setFormValues({...formValues, [name]:value})
  }

  //submit form
  const formSubmit = () => {
    const newOrderItem = {
      name: formValues.name,
      size: formValues.size,
      toppings: toppingsList
        .filter(topping => formValues[topping]),
      instructions: formValues.instructions,
      quantity: formValues.quantity,
      price: price,
    }

    console.log(newOrderItem)
    postOrder(newOrderItem)
  }

  //Submit Disabled Effect
  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setSubmitDisabled(!valid)
      })
  },[formValues])

  //Calculate Price
  useEffect( () => {
    
    if( formValues.size === '')
      return;

    const base = sizePrices[formValues.size].price
    const topp = sizePrices[formValues.size].toppingPrice
    const numToppings = toppingsList
      .filter(topping => formValues[topping])
      .length

    setPrice((base + topp * numToppings) * formValues.quantity)
  }, [formValues])

  
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path='/help'>
          <h2>Need help? Order Anchovies!</h2>
        </Route>

        <Route path='/pizza'>
          {order.length > 0 && <Order order={order} />}
          <Pizza values={formValues} 
            update={updateValues}
            submit={formSubmit}
            disabled={submitDisabled}
            price={price}
            errors={formErrors}
          />
        </Route>

        <Route path='/' component={Home}/>

      </Switch>
    </Router>
  );
};
export default App;
