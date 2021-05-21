import React, { useState, useEffect } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';
import * as yup from 'yup'
import schema from './components/formSchema'
import PizzaBuilder from './components/BuildingPizza'
import UpcomingPizza from './components/UpcomingPizza'


const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  mushrooms: false,
  peppers: false,
  instructions: '',
}

const initialFormErrors = {
  name: '',
  size: '',
}

const initialPizzas = [];
const initialDisabled = true;


const App = () => {

  const [pizzaOrder, setPizzaOrder] = useState([initialPizzas])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(name, value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({
      ...formValues,
      [name]: value
    }) 
  }


  const submitForm = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      mushrooms: formValues.mushrooms,
      peppers: formValues.peppers,
      instructions: formValues.instructions,
    }

    if(!newPizza.name || !newPizza.size ){
      return
    }
    setPizzaOrder([...pizzaOrder, newPizza])
    setFormValues(initialFormValues)

  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  return (
    <div className='container'>
      <header className='header'>
        <div className='navBar'>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/pizza' id='order-pizza' >Order</Link>
          </nav>
        </div>
        <img src='https://i.pinimg.com/originals/4c/5d/4c/4c5d4c3d3a303be1020e8374751ec549.jpg' alt='Pizza Planet' width='50%' id='PPlogo' ></img>
      </header> 

      <Switch>
        <Route path="/pizza/:pizzaID">
          <h2>Testing Pizza ID</h2>
          {/* <Item/> */}
        </Route>
        <Route path='/pizza' render={props => {
          return (
            <>
              <PizzaBuilder 
                update={inputChange}
                submit={submitForm}
                values={formValues}
                disabled={disabled}
                errors={formErrors}
              />
              <UpcomingPizza values={formValues} />
            </>
          )
          
          
          // <ItemsList
          //   // {...props}
          //   items={stock} />
        }} />
        <Route path='/' render={props => {
          return (
            <>
              <h2>Finest pizza in the Galaxy!</h2>
              <button>
                <Link to='/pizza'>Order Now!</Link>
              </button>
            </>
          )
        }}
        
        />
      </Switch>

    </div>
  );
};
export default App;
