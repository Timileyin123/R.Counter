import React, {} from 'react';
import Counter from './counter';

function Counters(){
    // const = [count, setCount] = useState(0);
    // const handleReset = () => {
    //     setCount(0)
    
return(
    <div>

                {/* <button onClick={() =>  handleReset ()}  className='btn btn-primary btn-lg m-2' style={{marginRight:20}}>Reset</button> */}


        <Counter />
        <Counter />
        <Counter />
        <Counter />
    </div>
);
}

export default Counters;