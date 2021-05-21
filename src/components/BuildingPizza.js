import React from 'react'

export default function BuildingPizza (props) {
    const { values, update, submit, disabled, errors } = props

    
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    
    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        update(name, valueToUse)
    }


    return (
        <div className='lowerSection' onSubmit={onSubmit} >
            <div className='builder'>
                <h2>Your Pizza, Your Way</h2>
                <form id='pizza-form'>
                    <div className='namesize'>
                        <label> Name
                        <input 
                            type='text'
                            name='name'
                            onChange={onChange}
                            value={values.name}
                            id='name-input'
                        />
                        </label>
                        <div className='error'>{errors.name}</div>
                        <label> Size  
                            <select  name='size' onChange={onChange} value={values.size} id='size-dropdown'>
                                <option value=''>--Choose Pizza Size--</option>
                                <option value='Large'>Large 14"</option>
                                <option value='Medium'>Medium 12"</option>
                                <option value='Small'>Small 10"</option>
                            </select>

                        </label>
                        <div className='error'>{errors.size}</div>
                    </div>
                    
                    <h3>Choose your toppings!</h3>
                    <div className='toppings'>
                        <label> Pepperoni
                        <input 
                            type='checkbox'
                            checked={values.pepperoni}
                            onChange={onChange}
                            name='pepperoni'
                        
                        />
                        </label>
                        <label> Sausage
                            <input 
                                type='checkbox'
                                checked={values.sausage}
                                onChange={onChange}
                                name='sausage'
                            
                            />
                        </label>
                        <label> Mushrooms
                            <input 
                                type='checkbox'
                                checked={values.mushrooms}
                                onChange={onChange}
                                name='mushrooms'
                            
                            />
                        </label>
                        <label> Green Peppers
                            <input 
                                type='checkbox'
                                checked={values.peppers} 
                                onChange={onChange}
                                name='peppers'
                            
                            />
                        </label>
                    </div>
                    
                    <br/>
                    <label> Special Instructions? 
                        <input 
                            type='text'
                            name='instructions'
                            id='special-text'
                        />
                    </label>
                    <br/>

                    
                    <div className='submit'>
                        <button disabled={ disabled } id='order-button' >Submit</button>
                    </div>

                </form>
            </div>
        </div>
        
    )
}