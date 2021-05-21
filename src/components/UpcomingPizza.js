import React from 'react'

export default function UpcomingPizza(props) {
  const { values } = props

  if (!values) {
    return <h3>Checking our Kitchen...</h3>
  }

    //   const toppingsArray = [values.pepperoni, values.sausage, values.mushrooms, values.peppers]

    //   const wantedToppings = []

    //   { toppingsArray.map(topping => {
    //     return topping ? 
    //     })
    
    // }

  return (
    <div className='queue'>
        <div className='upcomingPizza'>
            <h2>{values.name}</h2>
            <p>Size: {values.size} </p>
            <p>toppings: none</p>
      
        </div> 
    </div>
    
  )
}
