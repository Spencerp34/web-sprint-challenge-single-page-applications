import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';
import PizzaBuilder from './components/BuildingPizza'

const App = () => {
  return (
    <div className='container'>
      <header className='header'>
        <div className='navBar'>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/pizza'>Order</Link>
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
            <PizzaBuilder />
          )
          
          
          // <ItemsList
          //   // {...props}
          //   items={stock} />
        }} />
        <Route path='/' render={props => {
          return (
            <>
              <h2>Finest pizza in the Galaxy!</h2>
              <h2>Order now!</h2>
            </>
          )
        }}
        
        />
      </Switch>

    </div>
  );
};
export default App;
