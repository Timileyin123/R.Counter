import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    return(
        
<div>
            <span className='btn btn-primary btn-lg m-2'>{count}</span>
             <button className='btn btn-secondary btn-lg mx-2' onClick={() => setCount (count + 1)}>Increment</button>
            
            <button className='btn btn-danger btn-lg mx-2'  onClick={() => setCount (count - 1)}>Decrement</button>

            <button className='btn btn-primary btn-lg mx-2'  onClick={() => setCount (0)}>Reset</button>
        </div>      
    );
}


export default Counter;