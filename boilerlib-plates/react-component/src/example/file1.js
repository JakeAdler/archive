import React from 'react';

export default CountButton = ({setCount}) => {
    const handleClick = () => setCount(count++);
    return(
        <>
            <button onClick={handleClick} setCount={setCount}>
                + 1
            </button>
        </>
    )
    
}