import React from 'react'

export default function BuildingPizza (props) {
    
    return (
        <div className='lowerSection'>
            <div className='builder'>
                <h2>Testing Pizza Builder</h2>
                <form>
                    <div className='namesize'>
                        <label> Name
                        <input 
                            type='text'
                            name='name'
                        />
                        </label>
                        <label> Size  
                            <select  name='size'>
                                <option value=''>--Choose Pizza Size--</option>
                                <option value='Large'>Large 14"</option>
                                <option value='Medium'>Medium 12"</option>
                                <option value='Small'>Small 10"</option>
                            </select>

                        </label>
                    </div>
                    

                    <br/>
                    <div className='toppings'>
                        <label> Pepperoni
                        <input 
                            type='checkbox'
                        
                        />
                        </label>
                        <label> Sausage
                            <input 
                                type='checkbox'
                            
                            />
                        </label>
                        <label> Mushrooms
                            <input 
                                type='checkbox'
                            
                            />
                        </label>
                        <label> Green Peppers
                            <input 
                                type='checkbox'
                            
                            />
                        </label>
                    </div>
                    
                    <br/><br/>
                    <label> Special Instructions? 
                        <input 
                            type='text'
                            name='instructions'
                        />
                    </label>
                </form>
            </div>
        </div>
        
    )
}