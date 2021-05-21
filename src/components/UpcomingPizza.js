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
        // {
        //     if({key} === 0){

        //     }
        // }
    <div className='queue'>
        <div className='upcomingPizza'>
            <h2>{values.name}</h2>
            <p>{
                   values.size=== ('' || undefined) ? 'Pizza Queue' : `${values.size}`
            } </p>
            <p>{
                values.pepperoni ? 'Add Pepperoni' : null
            } </p>
            <p>{
                values.sausage ? 'Add Sausage' : null
            } </p>
            <p>{
                values.mushrooms ? 'Add Mushrooms' : null
            } </p>
            <p>{
                values.peppers ? 'Add Green Peppers' : null
            } </p>
            <p>{
                   values.instructions===('' || undefined) ? null : `Instructions: ${values.instructions}`
            } </p>
            <img src='https://lh3.googleusercontent.com/proxy/9mVp9Q8tnxdIH4ek1kMmGQF6iYqrPxl-kH182ZZNenxT2rrl81zQus53fqxGCxIN7eTyzfQymCMflEi5NT3GBg51LtpCMQ3RGA6M' alt='pizzaclipart' id='pizzaclipart'/>
      
        </div> 
    </div>
    
  )
}
