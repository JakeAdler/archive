import React, { useState } from 'react';
import CountButton from './file1';
import CountDisplay from './file2';

export default Count = () => {
    const [count, setCount] = useState(0);

    return(
        <>
            <CountButton setCount={setCount}/>
            <CountDisplay count={count}/>
        </>
    )
}