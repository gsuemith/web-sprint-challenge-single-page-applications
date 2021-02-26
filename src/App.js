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

const toppingsList = ['pepperoni', 'sausage', 'mushroom',
  'olive', 'greenPepper', 'bacon', 'chicken', 'anchovy']

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [order, setOrder] = useState([])
  const [submitDisabled, setSubmitDisabled] = useState(true)

  //post order
  const postOrder = (orderItem) => {
    axios.post('https://reqres.in/api/users', orderItem)
      .then(res => {
        setOrder([...order, res.data])
      })
      .catch(err => {
        console.log("Error posting order", err)
      })
  }

  //update values
  const updateValues = (name, value) => {
    // Yup.reach(schema, name)
    // .validate(value)
    // .then(valid => {

    // })
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

  
  return (
    <Router>
      <Header/>
      <Switch>

        <Route path='/pizza'>
          {order.length > 0 && <Order order={order} />}
          <Pizza values={formValues} 
            update={updateValues}
            submit={formSubmit}
            disabled={submitDisabled}
          />
        </Route>

        <Route path='/' component={Home}/>

      </Switch>
    </Router>
  );
};
export default App;
