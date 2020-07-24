import React, { useState, useEffect } from "react";
import Home from './Home';
import OrderForm from './OrderForm';
import formSchema from './formSchema'
import { Switch, Link, Route } from 'react-router-dom'
import * as yup from 'yup'
import axios from "axios";

const initialFormValues= {
  username:'',
  size: '',
  toppings: {
    pepperoni: false,
    beef: false,
    cheese: false,
    pineapple: false,
  },
  instructions: '',
}

const initialFormErrors = {
  username: '',
  size: '',
  instructions: '',
}


const initialOrders = []
const initialDisabled = true

const App = () => {
  const [orders, setOrders] = useState(initialOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getOrders = () =>{
    axios.get('https://reqres.in/api/users?page=2')
      .then(res =>{
        setOrders(res.data.data)
        console.log(res.data.data)
      })
      .catch(err =>{
        debugger
      })
  }

  const postNewOrder = newOrder =>{
    axios.post('https://reqres.in/api/users?page=2', newOrder)
      .then(res =>{
        setOrders([res.data, ...orders])
        setFormValues(initialFormValues)
      })
      .catch(err =>{
        debugger
      })
  }

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid =>{
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      .catch(err =>{
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })
      setFormValues({
        ...formValues,
        [name]: value
      })
  }

  const checkboxChange = (name, isChecked) =>{
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: isChecked,
      }
    })
  }

  const submit = () => {
    const newOrder = {
      username: formValues.username.trim(),
      size: formValues.size.trim(),
      instructions: formValues.instructions,
      toppings: Object.keys(formValues.toppings).filter(tp => formValues.toppings[tp]),
    }
    postNewOrder(newOrder)
  }

  useEffect(() =>{
    getOrders()
  }, [])

  useEffect(() =>{
    formSchema.isValid(formValues).then(valid =>{
      setDisabled(!valid)
    })
  }, [formValues])
console.log(orders)
  return (
    <div className='App'>
      <nav>
        <h1>Lambda Eats</h1>
        <div>
            <Link to='/'>Home </Link>
            <Link to='/pizza'>Order</Link>
        </div>
      </nav>

      <Switch>
        <Route path='/pizza'>
          <OrderForm
            values={formValues}
            inputChange={inputChange}
            checkboxChange={checkboxChange}
            submit={submit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>
        <Route path='/'>
            <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
